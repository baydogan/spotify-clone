import { NavLink, useLocation } from "react-router-dom";
import { HomeIcon, HomeIconActive, SearchIcon, SearchIconActive, CollectionIcon, CollectionIconActive } from "Icons";

const Menu = () => {
  const location = useLocation();
  return (
    <div className="mt-8 flex flex-col gap-y-4">
      <NavLink to="/" exact className={(navData) => (navData.isActive ? "side-menu-items-active" : "side-menu-items")}>
        {location.pathname === "/" ? <HomeIconActive /> : <HomeIcon />}
        Home
      </NavLink>
      <NavLink to="/search" className={(navData) => (navData.isActive ? "side-menu-items-active" : "side-menu-items")}>
        {location.pathname === "/search" ? <SearchIconActive /> : <SearchIcon />}
        Search
      </NavLink>
      <NavLink
        to="/collection"
        className={(navData) => (navData.isActive ? "side-menu-items-active" : "side-menu-items")}
      >
        {location.pathname === "/collection" ? <CollectionIconActive /> : <CollectionIcon />}
        Your Library
      </NavLink>
    </div>
  );
};

export default Menu;
