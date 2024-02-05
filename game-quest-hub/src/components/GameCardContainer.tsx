import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={"0.5em"}
      overflow={"hidden"}
      _hover={{
        transform: "scale(1.035)",
        overflow: "hidden",
        transition: "transform 0.15s ease-in",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
