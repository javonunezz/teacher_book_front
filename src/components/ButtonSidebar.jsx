import { useNavigate } from 'react-router-dom';

// Component ElementSidebar 
// Date Created: 10-03-23
// Date Edited: 11-03-23
// Description (No more than 20 words): This is a element of the sidebar component, which acts as an element within Sidebar


export const ButtonSidebar = ({ name, icon, route }) => {

  const navigate = useNavigate();

  function handleClick() {
    navigate(route);
  }


  return(
    <button onClick={ handleClick } className="flex items-center justify-center md:justify-start block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 text-white bg-gray-800 hover:border-gray-800 w-full">
      <div className="">
        {icon}
      </div>
      <span className="ml-2 md:inline hidden">{name}</span>
    </button>
  );
};
  



