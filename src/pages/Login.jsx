import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import './login.css';
import { doLogin } from '../auth/firebase';
import { useNavigate } from 'react-router-dom';

const defaultUser = {
  email: '',
  password: '',
};

function Login(props) {
  const [user, setUser] = useState(defaultUser);
  let navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('login', user);
    let verifiedUser = doLogin(user.email, user.password);
    if(verifiedUser){
        navigate("/")
    }
  };
  const handleChange = (e) => {
    console.log('change value', e.target.value, e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
        <form onSubmit={handleLogin} method="post">
          <Box className="login-box">
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
            />
            <TextField
              label="Password"
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
            <Button variant="contained" type="submit">
              Login
            </Button>
          </Box>
        </form>
    </>
  );
}

export default Login;
