import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
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
