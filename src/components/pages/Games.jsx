import React from "react";
import { Card } from "../Cards";
import "./Games.css"

export const Games = () => {
  return (
    <>
    <div className="game_cards">
      <Card
        img="src\assets\Tetris.jpg"
        title="Tetris"
        description="
Tetris is a timeless puzzle game where players arrange falling geometric shapes to create complete lines, testing their quick thinking and spatial skills. It's a classic that's easy to learn and endlessly addictive."
link="/games/tetris"
      />
      <Card
        img="src\assets\Tetris.jpg"
        title="Tetris"
        description="
Tetris is a timeless puzzle game where players arrange falling geometric shapes to create complete lines, testing their quick thinking and spatial skills. It's a classic that's easy to learn and endlessly addictive."
      />
      <Card
        img="src\assets\Tetris.jpg"
        title="Tetris"
        description="
Tetris is a timeless puzzle game where players arrange falling geometric shapes to create complete lines, testing their quick thinking and spatial skills. It's a classic that's easy to learn and endlessly addictive."
      />
    </div>
    </>
  );
};
