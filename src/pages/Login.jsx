import React, { useEffect, useReducer, useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Paper,
} from '@mui/material';
import { auth, doLogin } from '../auth/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../constant/routes';
// import { auth } from "../reducers/authReducer";

import { useSelector } from 'react-redux';
import { async } from '@firebase/util';
// import auth from "../auth/firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
const defaultUser = {
  email: '',
  password: '',
};

const loginBoxStye = {
  width: {
    xs: '100vw',
    md: '60vw',
    lg: '35vw',
  },
  minWidth: '400px',
  height: {
    xs: '100vh',
    md: '70vh',
    lg: '80vh',
  },
  minHeight: '400px',
  margin: { xs: 'auto', md: '10vh auto' },
  padding: { xs: '50px 20px', md: '30px' },
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: { xs: 'start', md: 'center' },
  flexDirection: 'column',
  gap: '20px',
};

function Login(props) {
  const [user, setUser] = useState(defaultUser);
  const { is_authenticated } = useSelector((state) => state.auth);
  const [modal, setModal] = useState(false);

  let navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    let verifiedUser = await doLogin(user.email, user.password);
    if (verifiedUser?.accessToken) {
      // save to persist
      navigate('/');
    } else {
      setModal(true);
    }
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    //checkuser here
  }, []);

  return (
    <>
      <form onSubmit={handleLogin} method="post">
        {/* <Alert severity="error">Error</Alert>; */}
        {modal && (
          <Alert
            severity="error"
            onClose={() => {
              setModal(false);
            }}
          >
            Error Login
          </Alert>
        )}
        {/* <Alert onClose={() => {}}>This is a success alert — check it out!</Alert> */}
        <Paper elevation={10} sx={loginBoxStye}>
          <Typography variant="h3" gutterBottom>
            Login
          </Typography>
          <TextField
            label="Email"
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Password"
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            fullWidth
            required
          />
          <Button variant="contained" type="submit" fullWidth>
            Login
          </Button>
          <Link to={ROUTES.REGISTER}>
            <Typography>Do you want to Register ?</Typography>
          </Link>
        </Paper>
      </form>
    </>
  );
}

export default Login;
