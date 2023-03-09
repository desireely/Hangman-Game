import React from "react";

const Word = ({ chosenWord, rightLetters }) => {
  return (
    <div className="word">
      {chosenWord.split("").map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {rightLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
