import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { OrderBy } from '../../services/api/comics/type';
import { ComicCard } from '../../components/ComicCard';
import { Menu } from '../../components/Menu';
import { Ordination } from '../../components/Ordination';
import { Pagination } from '../../components/Pagination';
import { useWatchlist } from '../../context/Watchlist/useWatchlist';
import { Search } from '../../components/Search';
import { CardContainer } from '../../components/CardContainer';
import { CardsList } from '../../components/CardsList';

const Watchlist: React.FC = () => {
  const [titleStartsWith, setTitleStartsWith] = React.useState<string | undefined>(undefined)
  const [page, setPage] = React.useState<number>(1)
  const [orderBy, setOrderBy] = React.useState<OrderBy>("title")

  const { getWatchlist } = useWatchlist();

  const data = getWatchlist(orderBy, titleStartsWith, page);

  return <Flex direction={"column"} overflowY={"scroll"}>
    <Flex>
      <Menu />
      <Search setValue={setTitleStartsWith} />
    </Flex>
    <Flex direction={"column"}>
      <Ordination ordination={orderBy} onSetOrdination={setOrderBy} />
      <Pagination total={data.total} currentPage={page} setPage={setPage} totalPages={Math.ceil(data.total / data.limit)} />
    </Flex>
    <CardContainer title={"Watchlist"}>
      <CardsList isLoaded={true} comics={data.results} />
    </CardContainer>
  </Flex>;
}

export default Watchlist;