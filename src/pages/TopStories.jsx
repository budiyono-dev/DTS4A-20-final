import { Card, CardActions, CardContent, CardMedia, IconButton, InputBase, Link, Pagination, Paper, Tab, Tabs, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../components/Loading";
// import SearchComponent from "../components/SearchComponent";
import * as NewsService from '../service/newsService';
import SearchIcon from '@mui/icons-material/Search';
import { Cateories, IconCategories } from '../constant/propertiesConstant';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { pageLoading } from '../reducers/pageReducer';

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

function TopStories() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(0);
  const [count, setCount] = useState(0);
  const loading = useSelector((state) => state.page.loading);
  const userAuth = useSelector((state) => state.auth.user);
  let navigate = useNavigate();
  let resetPage = 1;

  const dispatch = useDispatch();
  const getStories = () => {
    console.log("getStories");
    (async () => {
      const response = await NewsService.getTopStories(
        page,
        search,
        Cateories[category].toLowerCase()
      );
      dispatch(pageLoading(true));
      console.log(response);
      if (response.ok) {
        setData(response.list);
        let count = Math.ceil(response.initiate.found / response.initiate.limit);
        setCount(count);
        dispatch(pageLoading(false));
      } else {
        dispatch(pageLoading(false));
      }
    })();
  };

  const handlePagination = (event, value) => {
    setPage(value);
    getStories();
  };

  const handleChangeTab = (event, catIndex) => {
    setSearch("")
    setPage(resetPage);
    setCategory(catIndex);
    getStories();
  };

  const handleEnter = (event) => {
    event.preventDefault();
    searchStories();
  };

  const searchStories = () =>{
    setPage(resetPage);
    getStories();
  }

  useEffect(() => {
    const fetchTopNews = async () => {
      dispatch(pageLoading(true));
      console.log('fetch dari useeffect');
      const response = await NewsService.getTopStories(1, '', 'general');
      console.log('resp', response);
      if (response.ok) {
        dispatch(pageLoading(false));
        setData(response.list);
        let count = Math.ceil(
          response.initiate.found / response.initiate.limit
        );
        setCount(count);
      } else {
        dispatch(pageLoading(false));
      }
    };
    if (userAuth) {
      fetchTopNews();
    } else {
      navigate('/login');
    }
  }, [navigate, userAuth, dispatch]);

  return (
    <>
      <Box sx={{ padding: "2%" }}>
        <Typography variant="h5">Top Stories</Typography>
        <Box>
          {loading ? (
            <LoadingComponent />
          ) : (
            <Box>
              {/* <SearchComponent placeholder={"All News"} handleSearch={handleSearch} handleEnter={handleEnter} /> */}
              <Paper
                component="form"
                sx={{
                  m: "10px 0px",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search News"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  inputProps={{ "aria-label": `Search News` }}
                  onKeyPress={(e) => e.key === "Enter" && handleEnter(e)}
                />
                <IconButton sx={{ p: '10px' }} aria-label="search" onClick={searchStories}>
                  <SearchIcon />
                </IconButton>
              </Paper>
              <AntTabs value={category} onChange={handleChangeTab} aria-label="icon position tabs example">
                {Cateories.map((item, index) => (
                  <AntTab key={index} icon={IconCategories[index]} iconPosition="start" label={item} />
                ))}
              </AntTabs>
              <Grid container spacing={2}>
                {data.length ? (
                  data.map((item, i) => (
                    <Grid item xs={3} sx={{ boxSizing: 'border-box' }} key={i}>
                      <Card
                        key={i}
                        sx={{
                          // maxWidth: 345,
                          width: "100%",
                          boxSizing: "border-box",
                          height: "32vw",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          padding: "0px",
                          boxShadow: 3,
                          // backgroundColor: "tomato"
                        }}
                      >
                        <CardMedia
                          component="img"
                          alt={item.image_url}
                          sx={{ boxSizing: "border-box", height: "35%" }}
                          image={`${item.image_url}?w=164&h=164&fit=crop&auto=format`}
                        />
                        <CardContent sx={{ boxSizing: "border-box", height: "55%" }}>
                          <Typography gutterBottom variant="h6" component="div">
                            {item.title.length <= 30 ? item.title : item.title.substring(0, 30) + "..."}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.description.length <= 100 ? item.description : item.description.substring(0, 100) + "..."}
                          </Typography>
                        </CardContent>
                        <CardActions sx={{ height: '10%' }}>
                          <Link
                            href={item.url}
                            underline="hover"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {'See More'}
                          </Link>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))
                ) : (
                  <Typography sx={{}} margin="20vh 30vw" width="20vw" variant="h4">
                    Data Not Found
                  </Typography>
                )}
              </Grid>
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
              <Box sx={{ marginTop: "20px" }}>
                <Typography>Page: {page}</Typography>
                <Pagination count={count} page={page} onChange={handlePagination} />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default TopStories;
