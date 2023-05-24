import { Icon, image } from "/src/components/organisms/pages/indexPages";
import { FiLock } from "react-icons/fi";

const TEACHERS = [
  {
    image: image,
    name: "John Wick",
    subject: "Mathematics",
  },
  {
    image: image,
    name: "Javier Núñez",
    subject: "Advanced Physics",
  },
  {
    image: image,
    name: "Daniel",
    subject: "Quantum",
  },
  {
    image: image,
    name: "Pablo Escobar",
    subject: "drugs hiding",
  },
  {
    image: image,
    name: "Marcianeke",
    subject: "Unpronunciable slangs",
  },
  {
    image: image,
    name: "Tanjiro Kamado",
    subject: "Sword Handling",
  },
  {
    image: image,
    name: "Goku",
    subject: "Matter control",
  },
  {
    image: image,
    name: "Javier Núñez",
    subject: "Advanced Physics",
  },
  {
    image: image,
    name: "Daniel",
    subject: "Quantum",
  },
];

export const School = ({ showCardShadow }) => {
  const shadowClasses = showCardShadow
    ? "lg:shadow-lg lg:rounded-3xl lg:p-16"
    : "";
  return (
    <div
      className={`flex w-[310px] flex-col items-center lg:mx-16 lg:h-[770px] lg:w-full ${shadowClasses}`}
    >
      <h1 className="mb-6 text-3xl font-bold">Teachers</h1>

      <div className="flex flex-wrap justify-center gap-6 overflow-y-scroll py-4 lg:w-[800px] lg:scrollbar-thin lg:scrollbar-track-neutral-100 lg:scrollbar-thumb-neutral-200">
        {TEACHERS.map((teacher, index) => {
          return (
            <div
              key={index}
              className="h-97 flex h-[260px]  w-[220px] flex-col items-center justify-between rounded-3xl bg-neutral-100 p-7 shadow-[3px_3px_10px_-2px_#000000]"
            >
              <img
                src={image}
                className="h-20 w-20 rounded-full border-2 border-neutral-400"
                alt="teacher_image"
              />
              <h2 className="text-xl font-bold">{teacher.name}</h2>
              <p className="text-center text-base">
                Teacher of {teacher.subject}
              </p>
              <button className="flex h-10 w-[140px] items-center justify-center gap-6 rounded-lg bg-neutral-400 text-base text-white">
                Connect
                <Icon
                  iconComponent={<FiLock />}
                  color="text-white"
                  size="16px"
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
