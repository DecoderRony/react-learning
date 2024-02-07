import { Skeleton } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (error) throw error;

  if (isLoading) return <Skeleton height={10} width="100%" />;

  const first = data?.results[0];

  return first ? <video src={first.data[480]} controls /> : null;
};

export default GameTrailer;
