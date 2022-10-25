import { Box, Button, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box>
      <Box>
        <Typography>Page not found</Typography>
        <Button onClick={() => window.history.back()}>Back</Button>
      </Box>
    </Box>
  );
};

export default NotFound;