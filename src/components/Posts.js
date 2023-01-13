import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./Posts.css";
import { db } from "../firebase";
import FlipMove from "react-flip-move";

const Posts = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    db.collection("tweets")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setTweets(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  return (
    <section className="posts">
      <FlipMove>
        {tweets.map(
          ({
            id,
            data: { tweet, userhandle, timestamp, profilePicUrl, username },
          }) => (
            <Post
              key={id}
              id={id}
              tweet={tweet}
              timestamp={timestamp}
              profilePicUrl={profilePicUrl}
              userhandle={userhandle}
              username={username}
            />
          )
        )}
      </FlipMove>
    </section>
  );
};

export default Posts;
