import { Input } from "@chakra-ui/input";
import { InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onChange={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} color="gray" />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          color="gray"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
