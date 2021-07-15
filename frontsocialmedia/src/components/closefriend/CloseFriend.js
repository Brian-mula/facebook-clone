import React from "react";

function CloseFriend({ user }) {
  return (
    <li className="sidebarFrienList">
      <img src={user.profilePhoto} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}

export default CloseFriend;
