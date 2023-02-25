import { useDisclosure } from '@chakra-ui/react';
import { createContext } from 'react';
import { paginationLimit } from '../../components/Pagination/constants';
import { Comic, OrderBy } from '../../services/api/comics/type';
import { Data } from '../../services/api/type';
import usePersistedState from '../../utils/usePersistedState';
import { IWatchlistContext, IWatchlistProvider } from './types';

const WATCHLIST_STORAGE_KEY = '@marvel:watchlist';

export const WatchlistContext = createContext<IWatchlistContext>({} as IWatchlistContext);

export const WatchlistProvider = ({ children }: IWatchlistProvider) => {
  const [watchlist, setWatchlist] = usePersistedState<Comic[]>(WATCHLIST_STORAGE_KEY, []);
  const limit = paginationLimit;

  const isInWatchlist = (comic: Comic) => !!watchlist.find((item) => item.id === comic.id);

  const toggleWatchlist = (comic: Comic) => {
    const isOnWatchlist = watchlist.find((item) => item.id === comic.id);

    if (isOnWatchlist) {
      setWatchlist(watchlist.filter((item) => item.id !== comic.id));
    } else {
      setWatchlist([...watchlist, comic]);
    }
  };

  const getWatchlist = (orderBy?: OrderBy, titleStartsWith?: string, page?: number): Data<Comic> => {
    let tempWatchlist = watchlist;

    if (titleStartsWith) {
      tempWatchlist = tempWatchlist.filter((item) => item.title.toLowerCase().includes(titleStartsWith.toLowerCase()));
    }

    if (orderBy) {
      tempWatchlist = sortWatchlist(tempWatchlist, orderBy);
    }

    if (page) {
      tempWatchlist = tempWatchlist.slice((page - 1) * limit, page * limit);
    }

    return {
      results: tempWatchlist,
      total: watchlist.length,
      limit,
      offset: 0,
    };
  };

  const sortWatchlist = (tempWatchlist: Comic[], orderBy: OrderBy) => {
    switch (orderBy) {
      case 'title':
        return tempWatchlist.sort((a, b) => a.title.localeCompare(b.title));
      case '-title':
        return tempWatchlist.sort((a, b) => b.title.localeCompare(a.title));
      case 'onsaleDate':
        return tempWatchlist.sort((a, b) => a.dates[0].date.localeCompare(b.dates[0].date));
      case '-onsaleDate':
        return tempWatchlist.sort((a, b) => b.dates[0].date.localeCompare(a.dates[0].date));
      case 'modified':
        return tempWatchlist.sort((a, b) => a.modified.localeCompare(b.modified));
      case '-modified':
        return tempWatchlist.sort((a, b) => b.modified.localeCompare(a.modified));
      default:
        return tempWatchlist;
    }
  };

  return (
    <WatchlistContext.Provider value={{ getWatchlist, toggleWatchlist, isInWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  )
}