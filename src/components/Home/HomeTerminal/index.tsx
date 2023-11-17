import React from "react";
import HomeTerminalContainer from "./Container";
import HomeTerminalContent from "./Content";
import HomeTerminalTitlebar from "./Titlebar";

interface HomeTerminalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const HomeTerminal: React.FC<HomeTerminalProps> = ({ isOpen, handleClose }) => {
  return (
    <HomeTerminalContainer isOpen={isOpen}>
      <HomeTerminalTitlebar handleClose={handleClose} />
      <HomeTerminalContent isOpen={isOpen} />
    </HomeTerminalContainer>
  );
};

export default HomeTerminal;
