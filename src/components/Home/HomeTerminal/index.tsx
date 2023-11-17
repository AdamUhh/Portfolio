import React from "react";
import HomeTerminalContainer from "./Container";
import HomeTerminalContent from "./Content";
import HomeTerminalTitlebar from "./Titlebar";
import { HomeTerminalProps } from "./types";

export default function HomeTerminal({
  isOpen,
  handleClose,
}: HomeTerminalProps) {
  return (
    <HomeTerminalContainer isOpen={isOpen}>
      <HomeTerminalTitlebar handleClose={handleClose} />
      <HomeTerminalContent isOpen={isOpen} />
    </HomeTerminalContainer>
  );
}
