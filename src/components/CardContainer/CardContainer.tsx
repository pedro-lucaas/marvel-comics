import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

export type CardContainerProps = {
  children: any;
  title: string;
}

const CardContainer: React.FC<CardContainerProps> = ({ children, title }) => {
  return (
    <>
      <Flex w={"full"} justify={"center"}>
        <Flex flexWrap={"wrap"} justifyContent={"center"} mx={"10px"} maxW={"1100px"}>
          <Box w={"full"}>
            <Heading color={"white"}>{title}</Heading>
          </Box>
          {children}
        </Flex>
      </Flex>
    </>
  );
}

export default CardContainer;