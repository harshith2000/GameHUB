import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
  Flex,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const [sortDirection, setSortDirection] = useState<string>("Descending");

  let sortOrders = [
    { value: "name", label: "Name" },
    { value: "released", label: "Release date" },
    { value: "metacritic", label: "Popularity" },
  ];

  if (sortDirection === "Descending") {
    sortOrders = sortOrders.map((order) => {
      if (order.value.startsWith("-")) return order;
      return { ...order, value: `-${order.value}` };
    });
  }

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Flex alignItems="center">
      <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Order by: {currentSortOrder?.label || "Popularity"}
          </MenuButton>
          <MenuList>
            {sortOrders.map((order) => (
              <MenuItem
                onClick={() => onSelectSortOrder(order.value)}
                key={order.value}
                value={order.value}
              >
                {order.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>

      <Box marginLeft="2rem">
        <RadioGroup
          value={sortDirection}
          onChange={(val) => {
            setSortDirection(val as string);
            onSelectSortOrder(
              sortOrder.startsWith("-")
                ? sortOrder.substring(1)
                : `-${sortOrder}`
            );
          }}
        >
          <Flex direction="row">
            <Radio value="Ascending" marginRight="2rem">
              Ascending
            </Radio>{" "}
            <Radio value="Descending">Descending</Radio>
          </Flex>
        </RadioGroup>
      </Box>
    </Flex>
  );
};

export default SortSelector;
