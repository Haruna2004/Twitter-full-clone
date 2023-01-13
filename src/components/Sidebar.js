import React from "react";
import "./Sidebar.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NumbersOutlinedIcon from "@mui/icons-material/NumbersOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import SidebarOption from "./SidebarOption";
import { Avatar } from "@mui/material";
import { logout, selectUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className="sidebar">
      <SidebarOption Icon={HomeRoundedIcon} title="Home" />
      <SidebarOption Icon={NumbersOutlinedIcon} title="Explore" />
      <SidebarOption
        Icon={NotificationsNoneOutlinedIcon}
        title="Notifications"
      />
      <SidebarOption Icon={MailOutlineRoundedIcon} title="Messages" />
      <SidebarOption Icon={TurnedInNotOutlinedIcon} title="Bookmarks" />
      <SidebarOption Icon={ListAltRoundedIcon} title="Lists" />
      <SidebarOption Icon={PermIdentityOutlinedIcon} title="Profile" />
      <SidebarOption Icon={PendingOutlinedIcon} title="More" />

      <div className="Sidebartweet_button">
        <h4>Tweet</h4>
      </div>

      <div className="sidebar_profile">
        <Avatar
          src={user.profilePic}
          className="sidebar_avatar"
          onClick={() => dispatch(logout())}
        />
        <div className="sidebar_profileInfo">
          <h4>{user.username}</h4>
          <p>{user.userhandle}</p>
        </div>
        <MoreHorizOutlinedIcon />
      </div>
    </div>
  );
};

export default Sidebar;
