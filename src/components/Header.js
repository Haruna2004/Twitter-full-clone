import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import { IconButton } from "@mui/material";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <TwitterIcon
            sx={{ fontSize: 35 }}
            color="primary"
            className="logoIcon"
          />
        </IconButton>
      </div>
      <div className="header_middle">
        <h2>Home</h2>
        <AutoAwesomeOutlinedIcon />
      </div>
      <div className="header_right">
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search Twitter" />
        </div>
      </div>
    </div>
  );
};

export default Header;
