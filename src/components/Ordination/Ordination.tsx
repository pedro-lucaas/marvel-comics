import { Divider, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { OrderBy } from '../../services/api/comics/type';

export type OrdinationProps = {
  ordination: OrderBy;
  onSetOrdination: (ordination: OrderBy) => void;
};

import { ORDINATION_OPTIONS } from "./constants"

const Ordination: React.FC<OrdinationProps> = ({ ordination, onSetOrdination }) => {

  return (
    <>
      <Flex w={"full"} h={"full"}>
        {true && ORDINATION_OPTIONS.map((option) => (
          <Flex minH={"full"} key={option.value}>
            <Flex
              onClick={() => onSetOrdination(option.value)}
              color={option.value === ordination ? "white" : "black"}
              bg={option.value === ordination ? "red.500" : "whiteAlpha.500"}
              h={"full"}
              w={["full", "max-content"]}
              fontSize={"sm"}
              overflowWrap={"break-word"}
              p={"5px"}
              cursor={"pointer"}
              justifyContent={"center"}
              alignItems={"center"}
              textAlign={"center"}
            >
              <Text maxW={"100px"}>{option.label}</Text>
            </Flex>
            <Divider orientation="vertical" border={"none"} w={"2px"} />
          </Flex>
        ))}
      </Flex>
    </>
  );
}

export default Ordination;