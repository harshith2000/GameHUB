import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";

const ColorModeSwitcher = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap" color="grey">
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitcher;
