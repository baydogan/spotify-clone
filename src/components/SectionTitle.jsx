import { NavLink } from "react-router-dom";

const SectionTitle = ({ title }) => {
  return (
    <header className="flex items-center justify-between mb-5">
      <h1 className="text-2xl font-semibold tracking-tight text-white hover:underline cursor-pointer">{title}</h1>
    </header>
  );
};

export default SectionTitle;
