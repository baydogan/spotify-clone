import { PopupMenuIcon } from "Icons";

const ProfilePopup = () => {
  return (
    <div className="w-[196px] h-auto bg-[#282828] rounded px-1 py-1 top-10 right-1 shadow-md text-white text-sm z-50 absolute">
      <ul className="space-y-1">
        <li className="flex justify-between hover:bg-[#3E3E3E] px-2 py-2 rounded-sm">
          <button>Account</button>
          <PopupMenuIcon />
        </li>
        <li className="hover:bg-[#3E3E3E] px-2 py-2 rounded-sm">Profile</li>
        <li className="hover:bg-[#3E3E3E] px-2 py-2 rounded-sm">Sign Out</li>
      </ul>
    </div>
  );
};

export default ProfilePopup;
