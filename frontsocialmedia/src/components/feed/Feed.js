import Posts from "../posts/Posts";
import Share from "../share/Share";
import "./feed.css";
import { useEffect, useState } from "react";
import axios from "axios";
// import { Postss } from "../../dummyData";

function Feed({ username }) {
  const [postss, setPostss] = useState([]);

  // fetch data from api
  useEffect(() => {
    const fetchedata = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/60c7215cb60cf32db89aff8c");
      setPostss(res.data);
    };
    fetchedata();
  }, [username]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {postss.map((post) => (
          <Posts key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
