import spotifyWhite from "../../assets/spotifywhite.png";
import Menu from "./Menu";

const Sidebar = () => {
  return (
    <nav className="relative w-[300px] bg-black p-6">
      <img className="w-[132px]" src={spotifyWhite} alt="" />
      <Menu />
      
    </nav>
  );
};

export default Sidebar;
