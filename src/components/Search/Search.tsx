import { InputGroup, Input, InputRightElement, Icon } from '@chakra-ui/react';
import React from 'react';
import { RiSearch2Line } from 'react-icons/ri';

export type SearchProps = {
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Search: React.FC<SearchProps> = ({ setValue }) => {
  return (
    <InputGroup bg={"blackAlpha.600"} color={"white"}>
      <Input placeholder="Search for a comic" borderRadius={"0"} onBlur={(e) => setValue(e.target.value || undefined)} />
      <InputRightElement children={
        <Icon as={RiSearch2Line} />
      }
        cursor={"pointer"}
      />
    </InputGroup>
  );
}

export default Search;