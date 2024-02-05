import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Box px={"0.8em"} py={8}>
        <Navbar />
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          style={{ height: "calc(100vh - 8.3em)" }}
        >
          <Box>
            <Heading>Oops!</Heading>
            <Text>
              {isRouteErrorResponse(error)
                ? "This page does not exist."
                : "An unexpected error occurred."}
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default ErrorPage;
