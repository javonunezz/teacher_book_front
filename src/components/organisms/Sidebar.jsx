import {
  Button,
  FaBriefcase,
  IoIosSchool,
  IoMdSettings,
  CiLogout,
  AiFillHome,
  Link,
} from "/src/components/organisms/indexOrganisms";

export const Sidebar = ({ log }) => {
  const icons = [
    [<AiFillHome />, "Home", "/home"],
    [<FaBriefcase />, "Courses"],
    [<IoIosSchool />, "School", "/school"],
    [<IoMdSettings />, "Settings", "/settings"],
    [<CiLogout />, "Log out", "/login"],
  ];
  return (
    <div className="order-2 flex h-16 w-full flex-row items-center justify-center gap-x-7 bg-primary-500 py-3 lg:relative lg:left-0 lg:h-full lg:w-64 lg:flex-col lg:items-center lg:justify-center lg:gap-x-0 lg:space-y-5 lg:px-8">
      {icons.map((data) => {
        return (
          <Link key={data[1]} to={data[2]}>
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
          </Link>
        );
      })}
    </div>
  );
};
