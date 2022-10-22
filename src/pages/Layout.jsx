import { Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { ROUTES } from "../constant/routes";
// import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <>
      <Box sx={{ marginTop: "6%" }}>
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

export default Layout;
