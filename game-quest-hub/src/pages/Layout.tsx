import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box px={"0.8em"} py={8}>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default Layout;
