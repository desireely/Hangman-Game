import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Man from "./components/Man";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Message from "./components/Message";
import Alert from "./components/Alert";
import { showAlert as show, checkWin } from "./helpers/helpers";

import "./App.css";

// list of words that will be auto generated for the game
// (will randomly chose a word from this list when the page is refreshed)
const words = [
  "chimpanzee",
  "crocodile",
  "hedgehog",
  "kangaroo",
  "panda",
  "parrot",
  "leopard",
  "hippopotamus",
  "elephant",
  "armadillo",
  "otter",
  "zebra",
  "horse",
  "rabbit",
  "dolphin",
  "sloth",
  "monkey",
  "cheetah",
  "whale",
  "camel",
  "chicken",
  "donkey",
  "dugong",
  "flamingo",
  "giraffe",
  "hippopotamus",
  "hyena",
  "koala",
  "lion",
  "loris",
  "ostrich",
  "pangolin",
  "peacock",
  "platypus",
  "quokka",
  "raccoon",
  "rat",
  "wolf",
  "rhinoceros",
  "reindeer",
  "possum",
  "penguin",
  "salamander",
  "manatee",
  "sheep",
  "leopard",
  "owl",
  "swan",
  "tarsier",
  "toucan",
  "turkey",
  "vulture",
  "wallaby",
  "walrus",
  "weasel",
  "pelican",
];
let chosenWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [canPlay, setCanPlay] = useState(true);
  const [rightLetters, setRightLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (canPlay && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (chosenWord.includes(letter)) {
          if (!rightLetters.includes(letter)) {
            // if letter is right but not already entered
            setRightLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            // if letter is already in the rightLetters list
            show(setShowAlert);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            // if letter is wrong but not already entered
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            // letter is already in the wrongLetters list
            show(setShowAlert);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [rightLetters, wrongLetters, canPlay]);

  function playAgain() {
    setCanPlay(true);

    // Empty Arrays
    setRightLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    chosenWord = words[random];
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Man wrongLetters={wrongLetters} />
        <Word chosenWord={chosenWord} rightLetters={rightLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
      </div>
      <Message
        rightLetters={rightLetters}
        wrongLetters={wrongLetters}
        chosenWord={chosenWord}
        setCanPlay={setCanPlay}
        playAgain={playAgain}
      />
      <Alert showAlert={showAlert} />
    </>
  );
}

export default App;
