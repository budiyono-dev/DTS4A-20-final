import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { getDataFromDatabase, writeUserData } from '../auth/firebase';

function Home() {
  useEffect(() => {
    (() => {})();
  }, []);

  return (
    <>
      <Typography variant="h5">Home page</Typography>
    </>
  );
}

export default Home;
