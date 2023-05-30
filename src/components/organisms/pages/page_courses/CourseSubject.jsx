import {
  coursesStudents,
  Link,
  useLocation,
  imageStudentBoy,
  imageStudentGirl,
  BsArrowLeftShort,
  Icon,
} from "/src/components/organisms/pages/indexPages";

export const CourseSubject = ({ showCardShadow }) => {
  const { state } = useLocation();
  const course = state.courses;
  const students = coursesStudents.find(
    (courseSub) => courseSub.name === course
  );
  const shadowClasses = showCardShadow
    ? "lg:shadow-lg lg:rounded-3xl lg:px-16 lg:pb-16"
    : "";
  return (
    <>
      <div className="flex h-auto w-full justify-start pt-10">
        <Link to={"/courses"}>
          <button className="ml-10 flex h-[40px] w-[41px] items-center justify-center rounded-xl bg-primary-500 font-bold text-white lg:ml-20 lg:mt-20">
            <Icon
              iconComponent={<BsArrowLeftShort />}
              color={"text-white"}
              size={"30px"}
            />
          </button>
        </Link>
      </div>
      <div
        className={`mb-20 flex w-[310px] flex-col items-center lg:mx-16 lg:h-[770px] lg:w-full ${shadowClasses}`}
      >
        <h1 className="mb-6 text-3xl font-bold">{students.name}</h1>

        <div className="flex flex-wrap justify-center gap-6 overflow-y-scroll py-6 lg:w-[800px] lg:scrollbar-thin lg:scrollbar-track-neutral-100 lg:scrollbar-thumb-neutral-200">
          {students.students.map((student, index) => {
            return (
              <div
                key={index}
                className="h-97 flex h-[260px] w-[220px]  flex-col items-center justify-around rounded-3xl bg-neutral-100 p-7 shadow-[3px_3px_10px_-2px_#000000]"
              >
                <img
                  src={
                    student.gender === "Boy"
                      ? imageStudentBoy
                      : imageStudentGirl
                  }
                  className="h-20 w-20"
                  alt="teacher_image"
                />
                <h2 className="text-xl font-bold">{student.name}</h2>
                <Link
                  key={index}
                  to={"/courses/students/student"}
                  state={{ student: student, course: course }}
                >
                  <button className="flex h-10 w-[140px] items-center justify-center gap-6 rounded-lg bg-primary-500 text-lg text-white hover:brightness-125">
                    See details
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
