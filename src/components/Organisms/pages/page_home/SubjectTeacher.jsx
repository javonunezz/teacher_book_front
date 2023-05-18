import { TbMathSymbols, TbMessageLanguage } from "react-icons/tb";
import { SlChemistry } from "react-icons/sl";
import { Icon } from "../../../molecules/Icon";

const colors_subjects = [
  {
    type_subject: "Mathematics",
    background: "#567eb3",
    background_icon: "#a1b8d8",
    icon: <TbMathSymbols />,
  },
  {
    type_subject: "Language",
    background: "#e25159",
    background_icon: "#f4adad",
    icon: <TbMessageLanguage />,
  },
  {
    type_subject: "Chemistry",
    background: "#9c75c0",
    background_icon: "#d4c2e5",
    icon: <SlChemistry />,
  },
];

const subjects = [
  {
    subject_name: "Mathematics",
    classes_number: 4,
    weekly_classes: 5,
  },
  {
    subject_name: "Language",
    classes_number: 4,
    weekly_classes: 5,
  },
  {
    subject_name: "Chemistry",
    classes_number: 4,
    weekly_classes: 5,
  },
];

export const SubjectTeacher = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-4 px-4 lg:w-2/3">
      {subjects.length > 0 &&
        subjects.map((subject) => {
          const obj_subject = colors_subjects.find(
            (color_obj) => color_obj.type_subject === subject.subject_name
          );
          const color_bg = obj_subject.background;
          const color_icon = obj_subject.background_icon;
          const icon = obj_subject.icon;
          return (
            <div
              className={`flex h-[103px] w-[417px] min-w-[315px] flex-row items-center justify-around rounded-2xl text-white shadow-[3px_3px_10px_-2px_#000000]`}
              style={{
                backgroundColor: color_bg,
              }}
            >
              <div className="flex flex-col gap-y-4">
                <h1 className="text-xl font-semibold">
                  {subject.subject_name}
                </h1>
                <div className="flex flex-row gap-x-6">
                  <h2>{`Classes: ${subject.classes_number}`}</h2>
                  <h2>{`Weekly: ${subject.weekly_classes}`}</h2>
                </div>
              </div>
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-2xl`}
                style={{
                  backgroundColor: color_icon,
                }}
              >
                <Icon iconComponent={icon} color="text-white" size="33px" />
              </div>
            </div>
          );
        })}
    </div>
  );
};
