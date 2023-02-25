import { Stack, Skeleton, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Comic } from '../../services/api/comics/type';
import { ComicCard } from '../ComicCard';

export type CardsListProps = {
  isLoaded: boolean;
  comics?: Comic[];
}


const CardsList: React.FC<CardsListProps> = ({ comics, isLoaded }) => {
  return <Flex flexWrap={"wrap"} justifyContent={"center"} w={"full"} >
    {
      isLoaded && comics?.length === 0 && (
        <Box
          bg={"marvel.red"}
          borderRadius={"md"}
          p={"10px"}
          m={"10px"}
          w={"300px"}
          textAlign={"center"}
          border={"1px solid black"}
        >
          <Text color={"white"} >No comics found</Text>
        </Box>
      )
    }
    {!isLoaded && (
      new Array(24).fill(0).map((_, index) => (
        <Box key={index} flexGrow={1} flexBasis={"230px"} m={"10px"} maxW={"250px"} >
          <Stack>
            <Skeleton height={"300px"} />
            <Skeleton height={"50px"} />
          </Stack>
        </Box>
      ))
    )}
    {comics?.map((comic) => (
      <Box key={comic.id} flexGrow={1} flexBasis={"230px"} m={"10px"} maxW={"250px"}>
        <ComicCard comic={comic} />
      </Box>
    ))}
  </Flex>
}

export default CardsList;