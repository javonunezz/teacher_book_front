import { Icon } from "/src/components/molecules/Icon.jsx";

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
      <Icon iconComponent={icon} color={iconColor} size={iconSize} />
      <p className="ml-4 hidden w-3/5 text-left text-xl text-white underline lg:block">
        {text}
      </p>
    </button>
  );
};
