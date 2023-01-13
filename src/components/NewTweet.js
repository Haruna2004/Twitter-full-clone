import { Avatar } from "@mui/material";
import { useState } from "react";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import "./NewTweet.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const NewTweet = () => {
  const user = useSelector(selectUser);
  const [textInput, setTextInput] = useState("");
  const postTweet = (e) => {
    e.preventDefault();
    if (textInput === "" || textInput.trim() === "") {
      return;
    }
    db.collection("tweets").add({
      username: user.username,
      userhandle: user.userhandle,
      tweet: textInput,
      profilePicUrl: user.profilePic,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTextInput("");
  };
  return (
    <div className="newTweet">
      <Avatar src={user.profilePic} className="newTweet_avatar" />

      <form onSubmit={postTweet}>
        <div className="tweet_areaContainer">
          <div className="tweet_area">
            <textarea
              className="input"
              placeholder="What's happening?"
              maxLength={250}
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
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
  );
};

export default NewTweet;
