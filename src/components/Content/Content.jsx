import Home from "pages/Home";
import Search from "pages/Search";
import Navbar from "components/NavBar/NavBar";

import { Routes, Route } from "react-router-dom";

const Content = ({ children }) => {
  return (
    <div className="flex-auto overflow-auto">
      <Navbar />
      {children}
    </div>
  );
};

export default Content;
