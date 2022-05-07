import spotifyWhite from "../../assets/spotifywhite.png";
import Menu from "./Menu";
import Playlists from "./Playlists";

const Sidebar = () => {
  return (
    <nav className="relative w-[300px] bg-black p-6 min-h-screen">
      <img className="w-[132px]" src={spotifyWhite} alt="" />
      <Menu />
      <div className="border-b mt-4 border-[#282828]">

      </div>
      <Playlists />
    </nav>
  );
};

export default Sidebar;
