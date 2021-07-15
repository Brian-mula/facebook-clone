import React from "react";

function Online({ user }) {
  return (
    <li className="rightBarFriend">
      <div className="rightBarProfileimgContainer">
        <img src={user.profilePhoto} alt="" className="rightBarProfileImg" />
        <span className="rightBarOnline"></span>
      </div>
      <span className="rightBarUserName">{user.username}</span>
    </li>
  );
}

export default Online;
