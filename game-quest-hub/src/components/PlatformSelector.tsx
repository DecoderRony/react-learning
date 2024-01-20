import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import usePlatforms from "../hooks/usePlatforms";
import { Platforms } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platforms) => void;
  selectedPlatform: Platforms | undefined;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { platforms, error, isLoaded } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </MenuButton>

      <MenuList>
        <Skeleton isLoaded={isLoaded}>
          {platforms
            .filter((platform) => platform.id !== selectedPlatform?.id)
            .map((platform) => (
              <MenuItem
                key={platform.id}
                onClick={() => onSelectPlatform(platform)}
              >
                {platform.name}
              </MenuItem>
            ))}
        </Skeleton>
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
