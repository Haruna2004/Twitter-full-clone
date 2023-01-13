import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./Posts.css";
import { db } from "../firebase";

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
      {tweets.map(
        ({
          id,
          data: { tweet, userhandle, timestamp, profilPicUrl, username },
        }) => (
          <Post
            key={id}
            id={id}
            tweet={tweet}
            timestamp={timestamp}
            profilPicUrl={profilPicUrl}
            userhandle={userhandle}
            username={username}
          />
        )
      )}
    </section>
  );
};

export default Posts;
