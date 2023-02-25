import { Box, Flex, Heading, Skeleton, Stack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { COMICS_QUERY_KEY, listComics } from '../../services/api/comics';
import { OrderBy } from '../../services/api/comics/type';
import { ComicCard } from '../../components/ComicCard';
import { Menu } from '../../components/Menu';
import { Ordination } from '../../components/Ordination';
import { Pagination } from '../../components/Pagination';
import { Search } from '../../components/Search';
import { CardContainer } from '../../components/CardContainer';
import { CardsList } from '../../components/CardsList';

const Comics: React.FC = () => {
  const [titleStartsWith, setTitleStartsWith] = React.useState<string | undefined>(undefined)
  const [page, setPage] = React.useState<number>(1)
  const [totalPages, setTotalPage] = React.useState<number>(1)
  const [orderBy, setOrderBy] = React.useState<OrderBy>("title")

  const queryClient = useQueryClient()

  const { data: comics, isLoading } = useQuery([COMICS_QUERY_KEY, { titleStartsWith, page, orderBy }], () => listComics({ titleStartsWith, page, orderBy }), {
    onSuccess: (comics) => {
      queryClient.prefetchQuery([COMICS_QUERY_KEY, { titleStartsWith, page: page + 1, orderBy }], () => listComics({ titleStartsWith, page: page + 1, orderBy }))
      queryClient.prefetchQuery([COMICS_QUERY_KEY, { titleStartsWith, page: page + 2, orderBy }], () => listComics({ titleStartsWith, page: page + 2, orderBy }))
    }
  })

  useEffect(() => {
    if (comics) {
      setTotalPage(Math.ceil(comics.data.total / comics.data.limit))
    }
  }, [comics])

  return <Flex direction={"column"} overflowY={"scroll"}>
    <Flex>
      <Menu />
      <Search setValue={setTitleStartsWith} />
    </Flex>
    <Ordination ordination={orderBy} onSetOrdination={setOrderBy} />
    <Pagination total={comics?.data.total || 0} currentPage={page} setPage={setPage} totalPages={totalPages} />
    <CardContainer title={"Comics"}>
      <CardsList isLoaded={!isLoading} comics={comics?.data.results} />
    </CardContainer>
    <Pagination total={comics?.data.total || 0} currentPage={page} setPage={setPage} totalPages={totalPages} />
  </Flex>;
}

export default Comics;