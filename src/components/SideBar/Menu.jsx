import { NavLink, useLocation } from "react-router-dom";
import {
  HomeIcon,
  HomeIconActive,
  SearchIcon,
  SearchIconActive,
  CollectionIcon,
  CollectionIconActive,
  AddIcon,
  SideMenuLikeIcon,
} from "Icons";

const Menu = () => {
  const location = useLocation();
  return (
    <div className="mt-8 flex flex-col gap-y-4">
      <div className="group">
        <NavLink
          to="/"
          
          className={(navData) => (navData.isActive ? "side-menu-items-active" : "side-menu-items ")}
        >
          {location.pathname === "/" ? <HomeIconActive /> : <HomeIcon />}
          Home
        </NavLink>
      </div>
      <div className="group">
        <NavLink
          to="/search"
          
          className={(navData) => (navData.isActive ? "side-menu-items-active" : "side-menu-items ")}
        >
          {location.pathname === "/search" ? <SearchIconActive /> : <SearchIcon />}
          Search
        </NavLink>
      </div>
      <div className="group">
        <NavLink
          to="/collection"
          className={(navData) => (navData.isActive ? "side-menu-items-active" : "side-menu-items")}
        >
          {location.pathname === "/collection" ? <CollectionIconActive /> : <CollectionIcon />}
          Your Library
        </NavLink>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex gap-x-4 cursor-pointer group ">
          <button className="bg-gray-400 group-hover:bg-white transition-all duration-300 h-[24px] w-[24px] flex justify-center items-center rounded-sm">
            <AddIcon />
          </button>
          <span className="side-menu-items group-hover:text-white">Create playlist</span>
        </div>
        <div className="flex gap-x-4 cursor-pointer group">
          <button className="bg-gradient-to-r from-[#450af5] to bg-[#c4efd9]  transition-all duration-300 h-[24px] w-[24px] flex justify-center items-center rounded-sm">
            <SideMenuLikeIcon />
          </button>
          <span className="side-menu-items">Liked songs</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
