import { Comic, OrderBy } from "../../services/api/comics/type";
import { Data } from "../../services/api/type";

export interface IWatchlistContext {
  getWatchlist: (orderBy?: OrderBy, titleStartsWith?: string, page?: number) => Data<Comic>;
  toggleWatchlist: (comic: Comic) => void;
  isInWatchlist: (comic: Comic) => boolean;
}

export interface IWatchlistProvider {
  children: JSX.Element;
}