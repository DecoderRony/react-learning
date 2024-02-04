import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { platforms, error, isLoading } = usePlatforms();
  const selectedPlatformId = useGameQueryStore(
    (selector) => selector.gameQuery.platformId
  );
  const setSelectedPlatform = useGameQueryStore(
    (selector) => selector.setPlatformId
  );

  if (error) return null;

  const selectedPlatform = usePlatform(selectedPlatformId);

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
                onClick={() => setSelectedPlatform(platform.id)}
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
