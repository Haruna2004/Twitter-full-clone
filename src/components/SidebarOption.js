import { IconButton } from "@mui/material";
import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ Icon, title }) => {
  return (
    <div className="sidebarOption">
      <IconButton>
        <Icon className="sidebarIcon" sx={{ fontSize: 32 }} />
      </IconButton>
      <h2>{title}</h2>
    </div>
  );
};

export default SidebarOption;
