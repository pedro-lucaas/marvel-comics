import api from "..";
import { paginationLimit } from "../../../components/Pagination/constants";
import { endpoints } from "../endpoints";
import { Result } from "../type";
import { Comic, ListComicsParams } from "./type";

export const COMICS_QUERY_KEY = "comics";

export async function listComics(params?: ListComicsParams) {
  const { data } = await api.get<Result<Comic>>(endpoints.COMICS, {
    params: {
      title: params?.title,
      titleStartsWith: params?.titleStartsWith,
      orderBy: params?.orderBy,
      offset: params?.page ? (params.page - 1) * paginationLimit : 0,
      limit: paginationLimit,
      format: "comic",
    },
  });

  return data;
}