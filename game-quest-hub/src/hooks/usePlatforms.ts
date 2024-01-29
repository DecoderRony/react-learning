import { useQuery } from "@tanstack/react-query";
import PlatformsData from "../data/Platforms";
import { Platforms } from "../interfaces";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platforms>("/platforms/lists/parents");

const usePlatforms = () => {
  const {
    data: platforms,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: { count: PlatformsData.length, results: PlatformsData },
  });

  return { platforms, error, isLoading };
};

export default usePlatforms;
