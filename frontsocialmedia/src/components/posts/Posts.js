import "./post.css";
import { MoreVert, ThumbUpAlt, Favorite } from "@material-ui/icons";

import { useState, useEffect } from "react";
import axios from "axios";
import * as timeago from "timeago.js";
import { Link } from "react-router-dom";

function Posts({ post }) {
  const [likes, setLikes] = useState(post.likes.length);
  const [isliked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  const handleLike = () => {
    setLikes(isliked ? likes - 1 : likes + 1);

    setIsLiked(!isliked);
  };

  useEffect(() => {
    const fetcheuser = async () => {
      const res = await axios.get(`/user/?userId=${post.userId}`);
      setUser(res.data);
    };
    fetcheuser();
  }, [post.userId]);
  return (
    <div className="posts">
      <div className="postsWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                src={user.profilePhoto || "/assets/images/noavater.png"}
                alt=""
                className="postProfileImg"
              />
            </Link>
            <span className="postUserName">{user.username}</span>
            <span className="postDate">{timeago.format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.img} alt="" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpAlt
              color="primary"
              className="likeIcon"
              onClick={handleLike}
            />
            <Favorite
              color="secondary"
              className="likeIcon"
              onClick={handleLike}
            />
            <span className="postlikeCounter">{likes} likes</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
