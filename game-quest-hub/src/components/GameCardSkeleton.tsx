import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card
      width={{
        sm: "100%",
        md: "360px",
        lg: "300px",
        xl: "250px",
      }}
      borderRadius={"1em"}
      overflow="hidden"
    >
      <Skeleton
        height={{
          base: "10em",
          lg: "20em",
        }}
      ></Skeleton>

      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
