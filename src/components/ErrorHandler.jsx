import React from "react";
import { Alert, IconButton, InputBase, Paper } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const ErrorHandler = ({ error, close }) => {
  return (
    <Alert severity="error" onClose={close}>
      {error}
    </Alert>
  );
};

export default ErrorHandler;
