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

export interface GameDetails {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
}
