import React from "react";
import { IconButton, InputBase, Paper } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const SeacrhComponent = ({ placeholder, handleSearch, handleEnter, search }) => {
  const handleFilter = (event) => {
    event.preventDefault();
    handleEnter(event);
  };
  return (
    <Paper component="form" sx={{ m: "10px 0px", p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ "aria-label": `${placeholder}` }}
        // onChange={handleSearch}
        // value={search}
        // onKeyDown={handleEnter}
        onKeyPress={(e) => e.key === "Enter" && handleFilter(e)}
      />
      <IconButton sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SeacrhComponent;
