import "./rightbar.css";
import { Redeem } from "@material-ui/icons";
import { Users } from "../../dummyData";
import Online from "../online/online";

function Rightbar({ user }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <Redeem color="secondary" className="birthdayImg" />
          <span className="birthdayText">
            <b>Kathuke</b> and <b>3 other friends</b> have birthday
          </span>
        </div>
        {/* <img src="/assets/images/profile6.jpg" alt="" className="rightBarAd" /> */}
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h2 className="rightBarTitle">User Information</h2>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">{user.city}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">{user.from}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">
              {user.relationship === 1
                ? "single"
                : user.relationship === 2
                ? "Maried"
                : "complicated"}
            </span>
          </div>
        </div>
        <h2 className="rightBarTitle">User Friends</h2>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img
              src="/assets/images/profile9.jpg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Mutai Abigael</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightBar">
      <div className="rightBarContainer">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default Rightbar;
