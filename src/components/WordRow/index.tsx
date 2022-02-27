import { FC } from "react"
import { LetterCell } from "../../atoms/LetterCell"

interface props {
  currentGuess: string,
}

export const WordRow: FC<props> = ({currentGuess}) => {
  return (
    <section className="flex-wrapper">
      <LetterCell letterToDisplay={currentGuess.charAt(0) ? currentGuess.charAt(0) : ''} />
      <LetterCell letterToDisplay={currentGuess.charAt(1) ? currentGuess.charAt(1) : ''} />
      <LetterCell letterToDisplay={currentGuess.charAt(2) ? currentGuess.charAt(2) : ''} />
      <LetterCell letterToDisplay={currentGuess.charAt(3) ? currentGuess.charAt(3) : ''} />
      <LetterCell letterToDisplay={currentGuess.charAt(4) ? currentGuess.charAt(4) : ''} />
    </section>
  )
}
