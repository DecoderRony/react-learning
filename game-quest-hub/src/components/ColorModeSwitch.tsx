import { Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <Text whiteSpace={"nowrap"}>Dark mode</Text>
      <Switch
        colorScheme="orange"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
    </>
  );
};

export default ColorModeSwitch;
