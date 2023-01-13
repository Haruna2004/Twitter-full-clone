import "./Feeds.css";
import NewTweet from "./NewTweet";
import Posts from "./Posts";
const Feeds = () => {
  return (
    <div className="feeds">
      <NewTweet />
      <hr />
      <div className="showTweets">
        <h4>Show 140 Tweets</h4>
      </div>
      <hr />
      <Posts />
    </div>
  );
};

export default Feeds;
