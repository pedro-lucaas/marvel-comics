import React, { useEffect, useState } from 'react';
import { Button, Flex, Icon, Skeleton, Text } from '@chakra-ui/react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { paginationLength } from './constants';

export type PaginationProps = {
  isLoading?: boolean;
  total: number;
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ total, currentPage, setPage, totalPages, isLoading = false }) => {
  const [arrayPages, setArrayPages] = useState<number[]>([1, 2, 3, 4, 5]);
  const pagesArray = () => {
    let array = [];
    const length = totalPages < paginationLength ? totalPages : paginationLength;
    for (let i = 0; i < length; i++) {
      let value = i + currentPage - Math.floor(length / 2);
      if (value < 1) {
        array.push(length + value);
      } else if (value > totalPages) {
        array.push(value - length);
      } else {
        array.push(i + currentPage - Math.floor(length / 2));
      };
      array.sort((a, b) => a - b);
    }
    return array;
  };

  useEffect(() => {
    if (!isLoading) {
      setArrayPages(pagesArray());
    }
  }, [currentPage, totalPages]);


  const handlePrevious = () => {
    if (currentPage === 1) return;
    setPage(currentPage - 1);
  }

  const handleNext = () => {
    if (currentPage === totalPages) return;
    setPage(currentPage + 1);
  }

  return (
    <Flex w={"100%"} alignItems={"center"} justifyContent={"flex-end"} p={"20px"} gap={"5px"} >
      <Button size={"sm"} onClick={handlePrevious} disabled={currentPage === 1}>
        <Icon as={RiArrowLeftSLine} />
      </Button>
      {arrayPages.map((page) => (
        <Skeleton isLoaded={!isLoading} key={page}>
          <Text
            key={page}
            cursor={"pointer"}
            onClick={() => setPage(page)}
            px={["0px", "3px"]}
            color={page === currentPage ? "marvel.red" : "white"}
            textDecoration={page === currentPage ? "underline" : "none"}
            fontWeight={page === currentPage ? "bold" : "normal"}
            fontSize={["sm", "md"]}
          >
            {page}
          </Text>
        </Skeleton>
      ))}
      <Button size={"sm"} onClick={handleNext} disabled={currentPage === total}>
        <Icon as={RiArrowRightSLine} />
      </Button>
      <Skeleton isLoaded={!isLoading} >
        <Text color={"white"} fontSize={["sm", "md"]} onClick={() => setPage(totalPages)} cursor={"pointer"}>
          de {totalPages}
        </Text>
      </Skeleton>

    </Flex>
  );
}

export default Pagination;