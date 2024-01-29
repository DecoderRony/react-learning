import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse, Platforms } from "../interfaces";
import PlatformsData from "../data/Platforms";

const usePlatforms = () => {
  const {
    data: platforms,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platforms>>("/platforms/lists/parents")
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: { count: PlatformsData.length, results: PlatformsData },
  });

  return { platforms, error, isLoading };
};

export default usePlatforms;
