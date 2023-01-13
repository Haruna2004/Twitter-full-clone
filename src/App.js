import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Feeds from "./components/Feeds";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Trending from "./components/Trending";
import Login from "./components/Login";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
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
