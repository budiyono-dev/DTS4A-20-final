import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import * as NewsService from "../service/newsService";
function AllNews() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState("");

  // Similar to componentDidMount and componentDidUpdate:
  const fetchData = async (page, limit, search, filterCategory, filterDomain) => {
    // get the data from the api
    //   const data = await fetch("https://yourapi.com");
    const response = await NewsService.getList(page, limit, filter);
    console.log("list", response);
    if (response) {
      setData(response.list);
    }
  };
  useEffect(() => {
    // call the function
    fetchData(page, limit)
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <>
      <Box>
        <Typography variant="h5">All News</Typography>
        {/* {data && data.map((index, item) => <Box>{index}</Box>)}; */}
        <Box>
          {data.map((data, i) => (
            <Box key={i} data={data}>
              {data.uuid}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default AllNews;
