export type Result<T> = {
  code: number;
  status: string;
  etag: string;
  data: Data<T>;
};

export type Data<T> = {
  offset: number;
  limit: number;
  total: number;
  results: T[];
};
