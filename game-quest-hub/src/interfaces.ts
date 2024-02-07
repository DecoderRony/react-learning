import { GenreDetails } from "./hooks/useGenres";

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
  genres: GenreDetails[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
}

export interface Publisher {
  id: number;
  name: string;
}

export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: {
    480: string;
    max: string;
  };
}

export interface Screenshots {
  id: number;
  image: string;
  width: number;
  height: number;
}
