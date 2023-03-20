import { FaHome, FaBriefcase } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { ButtonSidebar } from "./ButtonSidebar";


export const Sidebar = () => {
  return (
    <div className="bg-gray-800 md:px-4">
      <div className="flex items-center justify-center mt-10 mb-8 hidden md:block">
        <div className="text-center">
          <span className="text-white text-2xl mx-2 my-1 font-semibold">LessonLinkApp👨🏼‍🎓</span>
        </div>
      </div>
      <nav className="hidden md:block">
        <ButtonSidebar name="Home" icon={<FaHome />} route="/" />
        <ButtonSidebar name="Courses" icon={<FaBriefcase />} route="/courses" />
        <ButtonSidebar name="Students" icon={<BsFillPersonFill />} route="/students" />
      </nav>
      <nav className="md:hidden flex flex-row items-center justify-between my-2">
        <ButtonSidebar icon={<FaHome />} route="/" />
        <ButtonSidebar icon={<FaBriefcase />} route="/courses" />
        <ButtonSidebar icon={<BsFillPersonFill />} route="/students" />
      </nav>
    </div>
  );
};
