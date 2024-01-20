import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const {
    data: platforms,
    error,
    isLoaded,
  } = useData<Platform>("/platforms/lists/parents");

  return { platforms, error, isLoaded };
};

export default usePlatforms;
