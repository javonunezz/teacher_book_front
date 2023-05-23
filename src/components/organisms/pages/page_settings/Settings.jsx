import {
  Input,
  FiEdit,
  Icon,
} from "/src/components/organisms/pages/indexPages";

export const Settings = ({ showCardShadow }) => {
  const shadowClasses = showCardShadow
    ? "lg:shadow-lg lg:rounded-3xl lg:p-16"
    : "";
  return (
    <div
      className={`flex w-[310px] flex-col items-center lg:mx-16 lg:h-[770px] lg:w-full ${shadowClasses}`}
    >
      <h1 className="mb-6 text-2xl lg:self-start">Profile</h1>
      <div className="mb-8 h-[3px] w-3/4 bg-neutral-100 lg:w-full"></div>
      <div className="relative">
        <button
          className="absolute bottom-14 left-1 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-lg"
          label="Edit profile image"
        >
          <Icon iconComponent={<FiEdit />} size="16px" />
        </button>

        <div className=" mb-12 h-[150px] w-[150px] overflow-hidden rounded-full">
          <img
            className="h-full object-cover"
            src="/src/assets/teacher.jpg"
            alt=""
          />
        </div>
      </div>
      <form className="text-right lg:w-[680px]">
        <div className="mb-8 grid gap-y-4 lg:grid-cols-2 lg:gap-x-14">
          <Input type="text" name="text" label="Last Name" />
          <Input type="text" name="text" label="First Name" />
          <Input type="text" name="text" label="Rut" />
          <Input type="text" name="text" label="Gender" />
          <Input type="text" name="text" label="Date Born" />
        </div>

        <button className=" rounded-xl bg-primary-500 px-6 py-3 text-white">
          Save Changes
        </button>
      </form>
    </div>
  );
};
