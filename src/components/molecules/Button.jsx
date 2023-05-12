import { IconContext } from "react-icons";

export const Button = ({
  icon,
  color,
  position,
  iconColor = "white",
  iconSize = "2em",
  sizeSM_w,
  sizeSM_h,
  sizeMD_w,
  text = "Button",
  sizeMD_h,
}) => {
  return (
    <button
      className={`${color} ${position} ${sizeSM_w} ${sizeSM_h} ${sizeMD_w} ${sizeMD_h} flex flex-row items-center border-0 p-1 hover:rounded-lg hover:bg-primary-200`}
    >
      <IconContext.Provider value={{ color: iconColor, size: iconSize }}>
        {icon}
      </IconContext.Provider>
      <p className="ml-4 hidden w-3/5 text-left text-xl text-white underline md:block">
        {text}
      </p>
    </button>
  );
};
