import React from "react";
import "./Trending.css";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { trendingList } from "./TrendingList";
const Trending = () => {
  return (
    <div className="trending">
      <div className="trends">
        <h2>Trends for you</h2>
        {trendingList.map(({ subject, keyWord, count }, index) => (
          <div className="trendsContainer" key={index}>
            <div>
              <div className="trend">
                <p>{subject}</p>
                <h3>{keyWord}</h3>
                <p>{count} Tweets</p>
              </div>
            </div>
            <MoreHorizOutlinedIcon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
