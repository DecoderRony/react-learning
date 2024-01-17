import useData from "./useData";

export interface GenreDetails {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const { data: genres, error, isLoading } = useData<GenreDetails>("/genres");

  return { genres, error, isLoading };
};

export default useGenres;
