import { FaHome, FaBriefcase } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { TbTableShortcut } from "react-icons/tb";
import { ButtonSidebar } from "./ButtonSidebar";
import { BiLogOut } from "react-icons/bi";

export const Sidebar = ({ log }) => {
  return (
    <div className="relative bg-blue-dark md:w-1/6 md:min-w-26 md:px-4">
      <div className="mb-8 mt-10 flex items-center justify-center md:block">
        <div className="text-center">
          <span className="mx-2 my-1 text-3xl font-semibold text-white">
            LessonLinkApp 📚
          </span>
        </div>
      </div>
      <nav className="hidden md:block">
        <ButtonSidebar name="Home" icon={<FaHome />} route="/home" />
        <ButtonSidebar name="Courses" icon={<FaBriefcase />} route="/courses" />
        <ButtonSidebar
          name="Students"
          icon={<BsFillPersonFill />}
          route="/students"
        />
        <ButtonSidebar
          name="Tables"
          icon={<TbTableShortcut />}
          route="/tables"
        />
      </nav>
      <nav className="absolute bottom-0 mb-4 hidden md:block">
        <ButtonSidebar name="Logout" icon={<BiLogOut />} route="/" />
      </nav>
      <nav className="my-2 flex flex-row items-center justify-between md:hidden">
        <ButtonSidebar icon={<FaHome />} route="/home" />
        <ButtonSidebar icon={<FaBriefcase />} route="/courses" />
        <ButtonSidebar icon={<BsFillPersonFill />} route="/students" />
        <ButtonSidebar icon={<TbTableShortcut />} route="/tables" />
        <ButtonSidebar name="Logout" icon={<BiLogOut />} route="/" />
      </nav>
    </div>
  );
};
