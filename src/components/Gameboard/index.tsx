import { useEffect, useState } from "react";
import { wordList } from "../../assets/words";
import { WordRow } from "../WordRow";

export const Gameboard = () => {
  const [gameWord, setGameWord] = useState<string>();
  const [turnNumber, setTurnNumber] = useState<number>(1);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [guesses, setGuesses] = useState<Array<string>>([]);
  const [correctGuess, setCorrectGuess] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    const newWord = wordList[Math.floor(Math.random() * wordList.length)];

    setGameWord(newWord);
  }, []);

  const handleCurrentGuess = (event: any) => {
    setCurrentGuess(event.target.value);
  }

  const checkWord = () => {
    const guessList = guesses;
    guessList.push(currentGuess);

    setGuesses(guessList);

    if (gameWord?.toLowerCase() === currentGuess.toLowerCase()) {
      setCorrectGuess(true);
      setGameOver(true);
      setCurrentGuess('');
    } else if (turnNumber < 5) {
      setTurnNumber(turnNumber + 1);
      setCurrentGuess('');
    } else {
      setTurnNumber(6);
      setGameOver(true);
      setCurrentGuess('');
    }
  }

  const checkWordDisplay = (wordRowNum: number): string => {
    switch(wordRowNum) {
      case 1: 
      if (turnNumber > 1) {
        return guesses[0];
      } else {
        return currentGuess;
      }
      break;
      case 2: 
      if (turnNumber > 2) {
        return guesses[1];
      } else if (turnNumber === 2) {
        return currentGuess; 
      } else {
        return '';
      }
      break;
      case 3: 
      if (turnNumber > 3) {
        return guesses[2];
      } else if (turnNumber === 3) {
        return currentGuess; 
      } else {
        return '';
      }
      break;
      case 4: 
      if (turnNumber > 4) {
        return guesses[3];
      } else if (turnNumber === 4) {
        return currentGuess; 
      } else {
        return '';
      }
      break;
      case 5: 
      if (turnNumber > 5) {
        return guesses[4];
      } else if (turnNumber === 5) {
        return currentGuess; 
      } else {
        return '';
      }
      break;
      default:
        return currentGuess;
    }
  }

  return (
    <div>
      {correctGuess && <h2>YOU'VE WON</h2>}
      <h1>Current word is {gameWord}</h1>
      {!gameOver ? 
      <div>
        <input value={currentGuess} maxLength={5} onChange={(e) => handleCurrentGuess(e)} />
        <div className="flex-wrap">
        <WordRow currentGuess={checkWordDisplay(1)}/>
        <WordRow currentGuess={checkWordDisplay(2)}/>
        <WordRow currentGuess={checkWordDisplay(3)}/>
        <WordRow currentGuess={checkWordDisplay(4)}/>
        <WordRow currentGuess={checkWordDisplay(5)}/>
        </div>
        <button disabled={currentGuess.length < 1} onClick={(e) => checkWord()}>CHECK WORD</button>
      </div>
      : 
        <h1>GAME OVER</h1>
      }
      
    </div>
  );
};
