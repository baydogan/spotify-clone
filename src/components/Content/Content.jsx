import Navbar from "components/NavBar/NavBar";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useState, useEffect } from "react";
import { getMySavedTracks } from "services/spotifyApi";

const Content = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div className="flex-auto overflow-auto overflow-y-scroll  bg-[#121212] ">
      <ReactScrollWheelHandler downHandler={() => setIsScrolled(true)} upHandler={() => setIsScrolled(false)}>
        <Navbar isScrolled={isScrolled} />
        <div className="px-8 py-6">{children}</div>
      </ReactScrollWheelHandler>
    </div>
  );
};

export default Content;
