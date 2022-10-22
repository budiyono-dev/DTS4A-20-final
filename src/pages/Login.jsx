import React, { useEffect, useReducer, useState } from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";
import "./login.css";
import { doLogin } from "../auth/firebase";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../constant/routes";
// import { auth } from "../reducers/authReducer";

import { useSelector } from "react-redux";
import { async } from "@firebase/util";
// import auth from "../auth/firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
const defaultUser = {
  email: "",
  password: "",
};

function Login(props) {
  const [user, setUser] = useState(defaultUser);
  const { is_authenticated } = useSelector((state) => state.auth);
  const [modal, setModal] = useState(false);

  let navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("login", user);
    let verifiedUser = await doLogin(user.email, user.password);
    console.log("login", verifiedUser);

    if (verifiedUser?.accessToken) {
      navigate("/");
    } else {
      setModal(true);
    }
  };
  const handleChange = (e) => {
    console.log("change value", e.target.value, e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

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
        <Box className="login-box">
          <Typography variant="h3" gutterBottom>
            Login
          </Typography>
          <TextField label="Email" type="email" name="email" id="email" value={user.email} onChange={handleChange} />
          <TextField label="Password" type="password" id="password" name="password" value={user.password} onChange={handleChange} />
          <Button variant="contained" type="submit">
            Login
          </Button>
          <Link to={ROUTES.REGISTER}>
            <Typography>Do you want to Register ?</Typography>
          </Link>
        </Box>
      </form>
    </>
  );
}

export default Login;
