import { CardMedia, Divider, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as NewsService from "../service/newsService";
import moment from "moment";

function DetailAllNews() {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const params = useParams();

  const fetchData = async (params, dispatch) => {
    const response = await NewsService.getUUID(params, dispatch);
    if (response.list) {
      setData(response.list);
    }
    if (response.response_error_mapping) {
      setMessage(response.response_error_mapping);
    }
  };
  const capitalizeFirstLowercaseRest = (str) => {
    let data = [];
    if (str) {
      for (let i = 0; i < str.length; i++) {
        let result = str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase();

        data.push(result);
      }
    }
    return data.join(", ");
  };

  useEffect(() => {
    // call the function
    fetchData(params.uuid, dispatch).catch(console.error);
    // make sure to catch any error
  }, []);

  return (
    <>
      <Box sx={{ padding: "2%" }}>
        <Box sx={{ display: "flex", flexDirection: "column", paddingRight: "20px" }}>
          <Typography variant="h5">News</Typography>
          <CardMedia component="img" height="550" image={data.image_url} alt="Paella dish" />
          <Typography marginTop="20px" variant="h4">
            {data.title}
          </Typography>
          <Box display={"flex"} marginTop="20px">
            <Typography margin="0 10px 0 10px" variant="body2">
              <b>Source </b>: {data.source}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography margin="0 10px 0 10px" variant="body2">
              <b>Posted </b>: {moment(data.published_at).format("DD MMMM YYYY - hh:mm:ss")}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography margin="0 10px 0 10px" variant="body2" display="flex">
              <b>Categories </b>
              <Box>:</Box>
              {capitalizeFirstLowercaseRest(data?.categories)}
            </Typography>
          </Box>
          <Box display={"flex"} marginBottom="30px">
            <Typography margin="20px 5px 0 0" variant="body2">
              {data.description}
            </Typography>
            <Link href={data.url} underline="hover" rel="noopener noreferrer" target="_blank">
              <Typography marginTop="20px" variant="body2">
                {"See More ..."}
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DetailAllNews;
