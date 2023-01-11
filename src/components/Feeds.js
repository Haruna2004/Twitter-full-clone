import { Avatar } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import EqualizerSharpIcon from "@mui/icons-material/EqualizerSharp";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import React, { useRef } from "react";
import "./Feeds.css";
import PostButtonOption from "./PostButtonOption";
const Feeds = () => {
  const inputRef = useRef();
  const postTweet = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div className="feeds">
      <div className="newTweet">
        <Avatar className="newTweet_avatar" />
        <form onSubmit={postTweet}>
          <div className="tweet_areaContainer">
            <div className="tweet_area">
              <textarea
                className="input"
                placeholder="What's happening?"
                maxLength={250}
              ></textarea>
            </div>

            <div className="tweet_areaBottom">
              <div className="tweet_areaIcons">
                <ImageOutlinedIcon />
                <GifBoxOutlinedIcon />
                <BallotOutlinedIcon />
                <SentimentSatisfiedAltOutlinedIcon />
                <PendingActionsOutlinedIcon />
                <FmdGoodOutlinedIcon />
              </div>
              <button type="submit" className="tweet_button" color="primary">
                Tweet
              </button>
            </div>
          </div>
        </form>
      </div>
      <hr />
      <div className="showTweets">
        <h4>Show 140 Tweets</h4>
      </div>
      <hr />

      <section className="posts">
        <Avatar className="post_avatar" />
        <div className="postContent">
          <div className="post_userInfo">
            <h3>Haruna Faruk</h3>
            <VerifiedIcon sx={{ fontSize: 20, color: "#1D9BF0" }} />
            <span> @haruna </span>
            <span> 20h </span>
          </div>
          <p>
            This post content should be here Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Laboriosam saepe vel nesciunt
            praesentium fugit impedit omnis quaerat a architecto exercitationem?
          </p>
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
      </section>

      <hr />
    </div>
  );
};

export default Feeds;
