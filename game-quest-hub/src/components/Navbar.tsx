import { Box, HStack, Hide, Image, Show } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack justifyContent={"space-between"}>
        <Image
          pt={{
            base: 0,
            xl: "0.3em",
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg"
          boxSize={"3em"}
        ></Image>

        <Hide below="md">
          <Box style={{ width: "100%" }} mx={5}>
            <SearchInput onSearch={onSearch} />
          </Box>
        </Hide>

        <HStack>
          <ColorModeSwitch />
        </HStack>
      </HStack>

      <Show below="md">
        <Box style={{ width: "100%" }} pt={6}>
          <SearchInput onSearch={onSearch} />
        </Box>
      </Show>
    </>
  );
};

export default Navbar;
