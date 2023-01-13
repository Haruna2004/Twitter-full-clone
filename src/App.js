import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feeds from "./components/Feeds";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Trending from "./components/Trending";
import Login from "./components/Login";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handle = (name) => {
    let firstname = name.split(" ")[0].toLowerCase();
    let userhandle = "@" + firstname;
    return userhandle;
  };
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
            userhandle: handle(authUser.displayName),
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          {/* Header */}
          <Header />
          <div className="app_body">
            <Sidebar />
            <hr className="line1 line" />
            <Feeds />
            <hr className="line2 line" />
            <Trending />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
