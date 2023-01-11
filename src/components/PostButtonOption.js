import { IconButton } from "@mui/material";

const PostButtonOption = ({ Icon, count }) => {
  return (
    <div className="postButton_option">
      <IconButton sx={{ color: "#71767b" }}>
        <Icon />
      </IconButton>
      <p style={{ color: "#71767b" }}>{count ? count : ""}</p>
    </div>
  );
};

export default PostButtonOption;
