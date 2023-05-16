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
    <div className="order-2 flex h-16 w-full flex-row items-center justify-center gap-x-7 bg-primary-500 py-3 lg:relative lg:left-0 lg:h-full lg:w-64 lg:flex-col lg:items-center lg:justify-center lg:gap-x-0 lg:space-y-5 lg:px-8">
      {icons.map((data) => {
        return (
          <Button
            key={data[1]}
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
