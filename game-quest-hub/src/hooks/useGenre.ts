import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { genres } = useGenres();

  return genres?.results.find((res) => res.id === id);
};

export default useGenre;
