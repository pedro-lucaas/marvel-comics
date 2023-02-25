import { Flex, Icon, Image, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useWatchlist } from '../../context/Watchlist/useWatchlist';
import { Comic } from '../../services/api/comics/type';
import { ComicModal } from '../ComicModal';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export type ComicCardProps = {
  comic: Comic
}

const ComicCard: React.FC<ComicCardProps> = ({ comic }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { isInWatchlist, toggleWatchlist } = useWatchlist()
  return (<>
    <Flex
      w={"100%"}
      h={"100%"}
      flexDirection={"column"}
      alignItems={"center"}
      color={"white"}
      fontWeight={"bold"}
      bg={"blackAlpha.800"}
      borderRadius={"2px"}
      overflow={"hidden"}
      cursor={"pointer"}
      onClick={onOpen}
    >
      <Image h={"300px"} w={"100%"} src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
      <Text fontSize={"md"} p={"10px"}>{comic.title}</Text>
      <Icon
        as={isInWatchlist(comic) ? AiFillStar : AiOutlineStar}
        color={isInWatchlist(comic) ? "yellow.500" : "white"}
        w={6}
        h={6}
        cursor={"pointer"}
        onClick={(e) => {
          e.stopPropagation();
          toggleWatchlist(comic)
        }}
      />
    </Flex>
    <ComicModal isOpen={isOpen} onClose={onClose} comic={comic} />
  </>
  );
}

export default ComicCard;