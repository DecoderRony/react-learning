import Genres from "../data/Genres";

export interface GenreDetails {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const {
    data: genres,
    error,
    isLoaded,
  } = { data: Genres, error: null, isLoaded: true };

  return { genres, error, isLoaded };
};

export default useGenres;
