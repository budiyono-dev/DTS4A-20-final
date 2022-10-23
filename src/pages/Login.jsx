import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Alert, Paper } from "@mui/material";
import { doLogin } from "../auth/firebase";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../constant/routes";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../reducers/authReducer";

const defaultUser = {
  email: "",
  password: "",
};

const loginBoxStye = {
  width: {
    xs: "100vw",
    md: "60vw",
    lg: "35vw",
  },
  minWidth: "400px",
  height: {
    xs: "100vh",
    md: "70vh",
    lg: "80vh",
  },
  minHeight: "400px",
  margin: { xs: "auto", md: "10vh auto" },
  padding: { xs: "50px 20px", md: "30px" },
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: { xs: "start", md: "center" },
  flexDirection: "column",
  gap: "20px",
};

function Login(props) {
  const [user, setUser] = useState(defaultUser);
  const [modal, setModal] = useState(false);
  const userAuth = useSelector((state) => state.auth.auth.user);
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    let resp = await doLogin(user.email, user.password);
    if (resp.msg === "ok") {
      dispatch(userLogin(resp.user));
      navigate("/");
    } else {
      setModal(true);
    }
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (userAuth) {
      navigate("/");
    }
  }, [userAuth, navigate]);

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
          <TextField label="Email" type="email" name="email" id="email" value={user.email} onChange={handleChange} fullWidth required />
          <TextField label="Password" type="password" id="password" name="password" value={user.password} onChange={handleChange} fullWidth required />
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
