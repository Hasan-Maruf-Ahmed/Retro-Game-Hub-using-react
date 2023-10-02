import React from "react";
import { Display } from "./Display";
import { Stage } from "./Stage";
import { StartButton } from "./StartButton";
import { createStage } from "../../../gameHelpers";

export const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()}/>
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StartButton />
      </aside>
    </div>
  );
};
