export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}
