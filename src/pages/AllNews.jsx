import { Card, CardActions, CardContent, CardMedia, IconButton, InputBase, Link, Pagination, Paper, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../components/Loading";
// import SearchComponent from "../components/SearchComponent";
import * as NewsService from "../service/newsService";
import SearchIcon from "@mui/icons-material/Search";
import { Cateories, IconCategories } from "../constant/propertiesConstant";
import styled from "@emotion/styled";

function AllNews() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState("general");
  const [count, setCount] = useState(0);
  const loading = useSelector((state) => state.auth.page.loading);
  let resetPage = 1;
  const AntTabs = styled(Tabs)({
    borderBottom: "1px solid #e8e8e8",
    "& .MuiTabs-indicator": {
      backgroundColor: "#1890ff",
    },
  });
  const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    // [theme.breakpoints.up("sm")]: {
    //   minWidth: 0,
    // },
    // fontWeight: theme.typography.fontWeightRegular,
    // marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#1890ff",
      // fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  }));
  const dispatch = useDispatch();
  const fetchData = async (page, limit, dispatch, search, categories, filterDomain) => {
    const response = await NewsService.getList(page, limit, dispatch, search, categories);

    if (response) {
      setData(response.list);
      let count = Math.ceil(response.initiate.found / response.initiate.limit);
      setCount(count);
    }
  };
  useEffect(() => {
    // call the function
    fetchData(page, limit, dispatch, search, categories)
      // make sure to catch any error
      .catch(console.error);
  }, [page, limit, dispatch, search, categories]);

  const handlePagination = (event, value) => {
    setPage(value);
    fetchData(value, limit, dispatch, search, categories);
  };

  const handleChangeTab = (event, newValue) => {
    let result;
    switch (newValue) {
      case 0:
        result = Cateories[newValue];
        break;
      case 1:
        result = Cateories[newValue];
        break;
      case 2:
        result = Cateories[newValue];
        break;
      case 3:
        result = Cateories[newValue];
        break;
      case 4:
        result = Cateories[newValue];
        break;
      case 5:
        result = Cateories[newValue];
        break;
      case 6:
        result = Cateories[newValue];
        break;
      case 7:
        result = Cateories[newValue];
        break;

      default:
        break;
    }
    setValue(newValue);
    setPage(resetPage);
    setCategories(result.toLowerCase());
    fetchData(resetPage, limit, dispatch, search, result.toLowerCase());
  };

  // const handleFitler = (event) => {
  //   setSearch(event.target.value);
  // };

  const handleEnter = (event) => {
    event.preventDefault();
    setSearch(event.target.value);

    setPage(resetPage);
    fetchData(resetPage, limit, dispatch, event.target.value, categories);
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
              <AntTabs value={value} onChange={handleChangeTab} aria-label="icon position tabs example">
                {Cateories.map((item, index) => (
                  <AntTab key={index} icon={IconCategories[index]} iconPosition="start" label={item} />
                ))}
                {/* <Tab icon={<PhoneIcon />} iconPosition="end" label="end" />
                <Tab icon={<PhoneMissedIcon />} iconPosition="end" label="end" />
                <Tab icon={<FavoriteIcon />} iconPosition="end" label="end" />
                <Tab icon={<PersonPinIcon />} iconPosition="end" label="end" /> */}
              </AntTabs>
              <Box sx={{ display: "flex", margin: "20px 10px 20px 10px" }}>
                {data.length ? (
                  data.map((item, i) => (
                    <Card key={i} sx={{ maxWidth: 345, marginRight: "10px" }}>
                      <CardMedia component="img" alt={item.image_url} height="140" image={`${item.image_url}?w=164&h=164&fit=crop&auto=format`} />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Link href={item.url} underline="hover" rel="noopener noreferrer" target="_blank">
                          {"See More"}
                        </Link>

                        {/* <Button size="small">Share</Button> */}
                        {/* <Button size="small">Learn More</Button> */}
                      </CardActions>
                    </Card>
                  ))
                ) : (
                  <Typography sx={{}} margin="20vh 30vw" width="20vw" variant="h4">
                    Data Not Found
                  </Typography>
                )}
              </Box>
              {/* <ImageList sx={{ width: "100vw", height: 450 }} cols={5} rowHeight={164}>
                {data.map((item, i) => (
                  <ImageListItem key={i}>
                    <img
                      src={`${item.image_url}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.image_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={i}
                      loading="lazy"
                    />
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2">{item.description}</Typography>
                  </ImageListItem>
                ))}
              </ImageList> */}
              <Typography>Page: {page}</Typography>
              <Pagination count={count} page={page} onChange={handlePagination} />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default AllNews;
