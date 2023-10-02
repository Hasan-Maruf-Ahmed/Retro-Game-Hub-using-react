import React from "react";
import { TETROMINOS } from "../../../tetraminos";
import { StyledCell } from "./styles/StyledCell";

export const Cell = ({ type }) => {
  return (
    <StyledCell type={type} color={TETROMINOS[type].color} />
  );
};
