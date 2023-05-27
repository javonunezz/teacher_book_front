import { imageBook, Link } from "/src/components/organisms/pages/indexPages";

const COURSES = [
  {
    image: imageBook,
    name: "1° Medio A",
    subject: "Mathematics",
  },
  {
    image: imageBook,
    name: "1° Medio B",
    subject: "Mathematics",
  },
  {
    image: imageBook,
    name: "1° Medio C",
    subject: "Mathematics",
  },
  {
    image: imageBook,
    name: "2° Medio A",
    subject: "Mathematics",
  },
  {
    image: imageBook,
    name: "2° Medio B",
    subject: "Mathematics",
  },
  {
    image: imageBook,
    name: "2° Medio C",
    subject: "Mathematics",
  },
];
export const Courses = ({ showCardShadow }) => {
  const shadowClasses = showCardShadow
    ? "lg:shadow-lg lg:rounded-3xl lg:p-16"
    : "";
  return (
    <div
      className={`flex w-[310px] flex-col items-center lg:mx-16 lg:h-[770px] lg:w-full ${shadowClasses}`}
    >
      <h1 className="mb-6 text-3xl font-bold">Courses</h1>

      <div className="flex flex-wrap justify-center gap-6 overflow-y-scroll py-4 lg:w-[800px] lg:scrollbar-thin lg:scrollbar-track-neutral-100 lg:scrollbar-thumb-neutral-200">
        {COURSES.map((course, index) => {
          return (
            <Link
              key={index}
              to={"/courses/students"}
              state={{ courses: course.name }}
            >
              <button
                key={index}
                className="h-97 flex h-[260px] w-[220px]  flex-col items-center justify-between rounded-3xl bg-neutral-100 p-7 shadow-[3px_3px_10px_-2px_#000000] hover:brightness-105"
              >
                <img
                  src={imageBook}
                  className="h-20 w-20"
                  alt="teacher_image"
                />
                <h2 className="text-xl font-bold">{course.name}</h2>
                <p className="text-xl font-semibold">{course.subject}</p>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
