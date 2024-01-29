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
import { Platforms } from "../interfaces";

interface Props {
  onSelectPlatform: (platform: Platforms) => void;
  selectedPlatformId: number | undefined;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { platforms, error, isLoading } = usePlatforms();

  const selectedPlatform = platforms.results.find(
    (platform) => platform.id === selectedPlatformId
  );

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {selectedPlatform?.name ?? "Platforms"}
      </MenuButton>

      <MenuList>
        <Skeleton isLoaded={!isLoading}>
          {platforms?.results
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
