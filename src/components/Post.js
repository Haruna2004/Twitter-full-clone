import React from "react";
import { Avatar } from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import EqualizerSharpIcon from "@mui/icons-material/EqualizerSharp";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import PostButtonOption from "./PostButtonOption";
const Post = ({
  id,
  tweet,
  timestamp,
  profilePicUrl,
  userhandle,
  username,
}) => {
  return (
    <>
      <div className="post">
        <Avatar className="post_avatar" />
        <div className="postContent">
          <div className="post_userInfo">
            <h3>{username}</h3>
            <VerifiedIcon sx={{ fontSize: 20, color: "#1D9BF0" }} />
            <span> {userhandle} </span>
            <span> 20h </span>
          </div>
          <p>{tweet}</p>
          <div className="post_buttons">
            <PostButtonOption Icon={EqualizerSharpIcon} count="34k" />
            <PostButtonOption
              Icon={ChatBubbleOutlineOutlinedIcon}
              count="2,345"
            />
            <PostButtonOption Icon={RepeatOutlinedIcon} count="2,342" />
            <PostButtonOption Icon={FavoriteBorderOutlinedIcon} count="4k" />
            <PostButtonOption Icon={FileUploadOutlinedIcon} count="" />
          </div>
        </div>
        <MoreHorizOutlinedIcon />
      </div>
      <hr />
    </>
  );
};

export default Post;
