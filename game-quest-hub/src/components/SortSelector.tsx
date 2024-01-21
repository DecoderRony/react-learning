import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string | undefined;
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Rating" },
  ];

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
              onClick={() => onSelectSortOrder(order.value)}
            >
              {order.label}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
