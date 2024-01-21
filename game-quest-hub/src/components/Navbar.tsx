import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
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
      <Text whiteSpace={"nowrap"}>Game Quest Hub</Text>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
