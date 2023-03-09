import React, { useEffect } from "react";
import { checkWin } from "../helpers/helpers";

const Message = ({
  rightLetters,
  wrongLetters,
  chosenWord,
  setCanPlay,
  playAgain,
}) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let canPlay = true;

  if (checkWin(rightLetters, wrongLetters, chosenWord) === "win") {
    finalMessage = "Yay! You have guessed the right word!";
    canPlay = false;
  } else if (checkWin(rightLetters, wrongLetters, chosenWord) === "lose") {
    finalMessage = "Oh no.. you did not guess the right word";
    finalMessageRevealWord = `the word was: ${chosenWord}`;
    canPlay = false;
  }

  useEffect(() => {
    setCanPlay(canPlay);
  });

  return (
    <div
      className="message-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="message">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>let's play again!</button>
      </div>
    </div>
  );
};

export default Message;
