import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={"0.5em"} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
