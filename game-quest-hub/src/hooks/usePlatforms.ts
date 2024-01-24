import Platforms from "../data/Platforms";

const usePlatforms = () => {
  const {
    data: platforms,
    error,
    isLoaded,
  } = { data: Platforms, error: null, isLoaded: true };

  return { platforms, error, isLoaded };
};

export default usePlatforms;
