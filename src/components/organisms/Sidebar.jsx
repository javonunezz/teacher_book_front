import { Button } from "../molecules/Button";
import { FaBriefcase } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";

export const Sidebar = ({ log }) => {
  const icons = [
    [<AiFillHome />, "Home"],
    [<FaBriefcase />, "Courses"],
    [<IoIosSchool />, "School"],
    [<IoMdSettings />, "Settings"],
    [<CiLogout />, "Log out"],
  ];
  return (
    <div className="min-h-16 flex flex-row items-center justify-center gap-x-7 bg-primary-500 py-3 md:h-screen md:w-64 md:flex-col md:items-center md:justify-center md:gap-x-0 md:space-y-5 md:px-8">
      {icons.map((data) => {
        return (
          <Button
            icon={data[0]}
            text={data[1]}
            color="bg-primary-500"
            position={"justify-around"}
            iconColor={"text-white"}
            iconSize={"1.25em"}
            sizeSM_w={"w-10"}
            sizeSM_h={"h-10"}
            sizeMD_w={"md:w-36"}
            sizeMD_h={"md:h-14"}
          />
        );
      })}
    </div>
  );
};
