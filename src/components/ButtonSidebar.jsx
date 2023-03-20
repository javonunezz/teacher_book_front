import { Link } from 'react-router-dom';


export const ButtonSidebar = ({ name, icon, route }) => {
  return(
    <Link to={ route } className="flex items-center justify-center md:justify-start py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 text-white bg-gray-800 hover:border-gray-800 w-full">
      {icon}
      <span className="ml-2 md:inline hidden">{name}</span>
    </Link>
  );
};
