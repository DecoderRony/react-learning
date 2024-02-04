import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Rating" },
  ];
  const selectedSortOrder = useGameQueryStore(
    (selector) => selector.gameQuery.sortOrder
  );
  const setSelectedSortOrder = useGameQueryStore(
    (selector) => selector.setSortOrder
  );

  const selectedSortOrderLabel = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        Order by: {selectedSortOrderLabel?.label ?? "Relevance"}
      </MenuButton>

      <MenuList>
        {sortOrders
          .filter((order) => order.value !== selectedSortOrder)
          .map((order) => (
            <MenuItem
              key={order.value}
              onClick={() => setSelectedSortOrder(order.value)}
            >
              {order.label}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
