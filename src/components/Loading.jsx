import React from "react";
import { Box } from "@mui/system";
import { Skeleton } from "@mui/material";

function LoadingComponent() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ marginRight: "2%" }}>
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </Box>
      <Box sx={{ marginRight: "2%" }}>
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </Box>
      <Box sx={{ marginRight: "2%" }}>
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </Box>
      <Box sx={{ marginRight: "2%" }}>
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </Box>
      <Box sx={{ marginRight: "2%" }}>
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </Box>
    </Box>
  );
}

export default LoadingComponent;
