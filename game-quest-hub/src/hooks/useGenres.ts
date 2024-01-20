import useData from "./useData";

export interface GenreDetails {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const { data: genres, error, isLoaded } = useData<GenreDetails>("/genres");

  return { genres, error, isLoaded };
};

export default useGenres;
