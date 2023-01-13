import React from "react";
import "./Login.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { auth, provider } from "../firebase";
import { login } from "../features/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const handle = (name) => {
    let firstname = name.split(" ")[0].toLowerCase();
    let userhandle = "@" + firstname;
    return userhandle;
  };
  const SignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>
        dispatch(
          login({
            username: result.user.displayName,
            profilePic: result.user.photoURL,
            id: result.user.uid,
            userhandle: handle(result.user.displayName),
          })
        )
      )
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <div className="login_container">
        <TwitterIcon
          sx={{ fontSize: 60 }}
          color="primary"
          className="logoIcon"
        />
        <Button onClick={SignIn}>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
