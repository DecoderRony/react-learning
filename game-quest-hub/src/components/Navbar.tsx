import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack p={2}>
      <Image
        pt={{
          base: 0,
          xl: "0.3em",
        }}
        src="https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg"
        boxSize={"3em"}
      ></Image>
      <Text>Game Quest Hub</Text>

      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
