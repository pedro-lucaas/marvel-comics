import React from "react";
import { WatchlistContext } from "./index";

export const useWatchlist = () => {
  const context = React.useContext(WatchlistContext);

  return context;
}