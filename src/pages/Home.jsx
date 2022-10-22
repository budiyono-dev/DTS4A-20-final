import { Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { ROUTES } from '../constant/routes';

function Home() {
  return (
    <>
      <Typography variant='h1'>Home page</Typography>
    </>
  );
}

export default Home;
