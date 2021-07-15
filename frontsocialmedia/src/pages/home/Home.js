import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topBar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

function Home() {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
