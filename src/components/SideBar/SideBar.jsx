import spotifyWhite from "../../assets/spotifywhite.png";
import Menu from "./Menu";
import Playlists from "./Playlists";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="relative w-[320px] bg-black p-6  overflow-auto">
      <Link to="/">
        <img className="w-[132px]" src={spotifyWhite} alt="" />
      </Link>
      <Menu />
      <div className="border-b mt-4 border-[#282828]"></div>
      <Playlists />
    </nav>
  );
};

export default Sidebar;
