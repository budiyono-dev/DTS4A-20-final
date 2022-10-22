import { useEffect, useState } from 'react';
import { doRegister } from '../auth/firebase';
import { Paper, TextField, Button, Typography } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { ROUTES } from '../constant/routes';
import {useSelector} from "react-redux";

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

function Register() {
  const [user, setUser] = useState(defaultUser);
  const navigate = useNavigate();
  const userAuth = useSelector( state => state.auth.user);

  const handleRegister = async (e) => {
    e.preventDefault();
    let resp = await doRegister(user.email, user.password);
    if (resp.msg === "ok") {
      navigate('/login');
    }
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
      if(userAuth){
          navigate("/")
      }
  }, [userAuth, navigate]);

  return (
    <>
      <form onSubmit={handleRegister} method="post">
        <Paper elevation={10} sx={loginBoxStye}>
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
            Register
          </Button>
          <Link to={ROUTES.LOGIN}>
            <Typography>Do you want to Login ?</Typography>
          </Link>
        </Paper>
      </form>
    </>
  );
}

export default Register;
