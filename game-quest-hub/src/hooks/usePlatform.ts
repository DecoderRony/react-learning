import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { platforms } = usePlatforms();

  return platforms?.results.find((res) => res.id === id);
};

export default usePlatform;
