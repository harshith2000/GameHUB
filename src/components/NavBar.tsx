import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitcher from "../ColorModeSwitcher";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justify="space-between" padding="10px">
      <Image src={logo} boxSize="100px"></Image>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitcher />
    </HStack>
  );
};

export default NavBar;
