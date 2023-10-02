import React from 'react'
import { StyledStartButton } from './styles/StyledStartButton'

export const StartButton = ({callBack}) => {
  return (
    <StyledStartButton onClick={callBack}>Start Game</StyledStartButton>
  )
}
