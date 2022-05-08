import Profile from "./Profile";
import ProfilePopup from "./ProfilePopup";
import { ForwardButton, BackButton } from "Icons";
import { useState } from "react";

const Navbar = ({ isScrolled }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div
      className={
        isScrolled
          ? "w-full sticky top-0 p-3 bg-black transition-all duration-500"
          : "w-full sticky top-0 p-3 transition-all duration-500"
      }
    >
      <div className="flex justify-between ml-4 mt-1 relative">
        <div className="flex gap-x-4">
          <button className="flex justify-center items-center w-8 h-8 rounded-full bg-black">
            <BackButton />
          </button>
          <button className="flex justify-center items-center w-8 h-8 rounded-full bg-black">
            <ForwardButton />
          </button>
        </div>
        <div className="flex flex-col">
          <Profile isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
          {isPopupOpen && <ProfilePopup  />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
