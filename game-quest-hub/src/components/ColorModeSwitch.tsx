import { Button, useColorMode } from "@chakra-ui/react";
import { BsBrightnessLowFill, BsMoonFill } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  if (colorMode === "dark") {
    return (
      <Button variant="link" onClick={() => toggleColorMode()}>
        <BsBrightnessLowFill fontSize={"2em"}></BsBrightnessLowFill>
      </Button>
    );
  } else {
    return (
      <Button variant="link" onClick={() => toggleColorMode()}>
        <BsMoonFill fontSize={"2em"}></BsMoonFill>
      </Button>
    );
  }
};

export default ColorModeSwitch;
