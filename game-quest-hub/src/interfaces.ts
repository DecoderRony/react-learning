export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}
