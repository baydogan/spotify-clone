import Profile from "./Profile";
import { useEffect } from "react";

const Navbar = () => {
  return (
    <div className="w-full sticky top-0 px-2 py-3 ">
      <div className="flex justify-between">
        NavBar
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
