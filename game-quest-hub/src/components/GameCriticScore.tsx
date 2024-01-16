import { Badge } from "@chakra-ui/react";

const GameCriticScore = ({ criticScore }: { criticScore: number }) => {
  const color = criticScore > 75 ? "green" : criticScore > 60 ? "yellwow" : "";

  return (
    <Badge borderRadius="0.4em" bgColor={color}>
      {criticScore}
    </Badge>
  );
};

export default GameCriticScore;
