import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

export const ButtonSidebar = ({ name, icon, route }) => {
  return (
    <Link
      to={route}
      className="hover:bg-gray-700 bg-gray-800 flex w-full items-center justify-center rounded px-4 py-2.5 text-white transition duration-200 hover:bg-blue-light hover:text-white md:justify-start"
    >
      <IconContext.Provider value={{ color: "white", size: "2em" }}>
        {icon}
      </IconContext.Provider>
      <span className="ml-3 hidden text-2xl md:inline">{name}</span>
    </Link>
  );
};
