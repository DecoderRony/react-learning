import { Box, HStack, Hide, Image, Show } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <>
      <HStack justifyContent={"space-between"}>
        <Link to="/">
          <Image
            pt={{
              base: 0,
              xl: "0.3em",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg"
            boxSize={"3em"}
          ></Image>
        </Link>

        <Hide below="md">
          <Box style={{ width: "100%" }} mx={5}>
            <SearchInput />
          </Box>
        </Hide>

        <HStack>
          <ColorModeSwitch />
        </HStack>
      </HStack>

      <Show below="md">
        <Box style={{ width: "100%" }} pt={6}>
          <SearchInput />
        </Box>
      </Show>
    </>
  );
};

export default Navbar;
