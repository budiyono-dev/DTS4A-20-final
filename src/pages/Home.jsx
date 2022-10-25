import { Box, Typography } from "@mui/material";

import React, { useEffect } from "react";
import { getDataFromDatabase } from "../auth/firebase";

function Home() {
  useEffect(() => {
    console.log("firts");
    console.log(getDataFromDatabase());
  }, []);

  return (
    <>
      <Box sx={{ padding: "2%" }}>
        <Typography variant="h5">Home page</Typography>
      </Box>
    </>
  );
}

export default Home;
