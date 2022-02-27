import { FC } from "react"

interface props {
  letterToDisplay: string
}

export const LetterCell: FC<props > = ({letterToDisplay}) => {
  return (
    <div>
      {letterToDisplay}
    </div>
  )
}
