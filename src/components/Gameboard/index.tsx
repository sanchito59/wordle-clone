import { useEffect, useState } from "react";
import { wordList } from "../../assets/words";

export const Gameboard = () => {
  const [gameWord, setGameWord] = useState<string>();

  useEffect(() => {
    const newWord = wordList[Math.floor(Math.random() * wordList.length)];

    setGameWord(newWord);
  }, [])

  return (
    <div>
      <h1>Current word is {gameWord}</h1>
    </div>
  );
};
