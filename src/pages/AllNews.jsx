import { IconButton, ImageList, ImageListItem, InputBase, Pagination, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../components/Loading";
// import SearchComponent from "../components/SearchComponent";
import * as NewsService from "../service/newsService";
import SearchIcon from "@mui/icons-material/Search";

function AllNews() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("");
  const [count, setCount] = useState(0);
  const loading = useSelector((state) => state.auth.page.loading);

  const dispatch = useDispatch();
  const fetchData = async (page, limit, dispatch, search, filterCategory, filterDomain) => {
    const response = await NewsService.getList(page, limit, dispatch, search);

    if (response) {
      setData(response.list);
      let count = Math.ceil(response.initiate.found / response.initiate.limit);
      setCount(count);
    }
  };
  useEffect(() => {
    // call the function
    fetchData(page, limit, dispatch)
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
    fetchData(value, limit, dispatch, search);
  };

  const handleFitler = (event) => {
    setSearch(event.target.value);
  };

  const handleEnter = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    fetchData(page, limit, dispatch, event.target.value);
  };

  return (
    <>
      <Box>
        <Typography variant="h5">All News</Typography>
        <Box>
          {loading ? (
            <LoadingComponent />
          ) : (
            <Box>
              {/* <SearchComponent placeholder={"All News"} handleSearch={handleSearch} handleEnter={handleEnter} /> */}
              <Paper component="form" sx={{ m: "10px 0px", p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search News"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  inputProps={{ "aria-label": `Search News` }}
                  onKeyPress={(e) => e.key === "Enter" && handleEnter(e)}
                />
                <IconButton sx={{ p: "10px" }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
              <ImageList sx={{ width: 1000, height: 450 }} cols={5} rowHeight={164}>
                {data.map((item, i) => (
                  <ImageListItem key={i}>
                    <img
                      src={`${item.image_url}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.image_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.uuid}
                      loading="lazy"
                    />
                    <Typography variant="h5">{item.title}</Typography>
                  </ImageListItem>
                ))}
              </ImageList>
              <Typography>Page: {page}</Typography>
              <Pagination count={count} page={page} onChange={handleChange} />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default AllNews;
