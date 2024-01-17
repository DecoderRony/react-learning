import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Card>
        <Skeleton
          height={{
            base: "10em",
            lg: "12em",
          }}
        ></Skeleton>

        <CardBody>
          <SkeletonText noOfLines={2}></SkeletonText>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCardSkeleton;
