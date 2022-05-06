import Home from "pages/Home";
import Navbar from "components/NavBar/NavBar";
import Player from "components/Player/Player";
import { Routes, Route } from "react-router-dom";

const Content = () => {
  return (
    <div className="flex-auto overflow-auto">
      <Navbar />    
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
  );
};

export default Content;
