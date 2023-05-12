import { IconContext } from "react-icons";

export const Icon = ({
  iconComponent,
  color = "text-black",
  size = "16px",
}) => {
  return (
    <IconContext.Provider value={{ className: color, size: size }}>
      {iconComponent}
    </IconContext.Provider>
  );
};
