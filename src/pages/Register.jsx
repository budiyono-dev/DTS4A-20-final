import { useState } from 'react';
import { doRegister } from '../auth/firebase';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const defaultUser = {
  email: '',
  password: '',
};

function Register() {
  const [user, setUser] = useState(defaultUser);
  let navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    let verifiedUser = doRegister(user.email, user.password);
    if(verifiedUser){
        navigate("/login")
    }
  };
  const handleChange = (e) => {
    console.log('change value', e.target.value, e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form onSubmit={handleRegister} method="post">
        <Box className="login-box">
          <Typography variant="h3" gutterBottom>
            Register
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
            Register
          </Button>
        </Box>
      </form>
    </>
  );
}

export default Register;
