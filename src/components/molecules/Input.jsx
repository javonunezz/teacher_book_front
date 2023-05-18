import { Icon } from "/src/components/molecules/Icon";

export const Input = ({
  type = "text",
  name = "input",
  label = "Input",
  iconComponent = "",
  className = "",
}) => {
  return (
    <div className={`relative h-10 w-auto ${className}`}>
      <label className="absolute -top-[10px] left-4 bg-white px-1 text-xs">
        {label}
      </label>
      <input
        type={type}
        name={name}
        label={label}
        className="h-9 w-full rounded-md border-2 border-neutral-200 px-3 "
      />
      {iconComponent && (
        <div className="absolute right-3 top-[25%]">
          <Icon
            iconComponent={iconComponent}
            color="text-neutral-500"
            size="16px"
          />
        </div>
      )}
    </div>
  );
};
