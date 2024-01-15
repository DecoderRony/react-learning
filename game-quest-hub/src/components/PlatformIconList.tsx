import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  BsApple,
  BsBrowserChrome,
  BsGooglePlay,
  BsMicrosoft,
  BsNintendoSwitch,
  BsPlaystation,
  BsUbuntu,
  BsXbox,
} from "react-icons/bs";
import { Platforms } from "../hooks/useGames";

interface Props {
  platforms: (Platforms & { id: number })[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: {
    [key: string]: IconType;
  } = {
    pc: BsMicrosoft,
    playstation: BsPlaystation,
    xbox: BsXbox,
    nintendo: BsNintendoSwitch,
    mac: BsApple,
    linux: BsUbuntu,
    android: BsGooglePlay,
    web: BsBrowserChrome,
  };

  return (
    <HStack marginX={"0.1em"} marginY={"0.1em"}>
      {platforms.map((platform) => (
        <Icon
          as={iconMap[platform.slug]}
          key={platform.id}
          color="gray.500"
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
