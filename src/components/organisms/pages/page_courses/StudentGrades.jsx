import {
  image,
  coursesStudents,
  useLocation,
  BsArrowLeftShort,
  Link,
  Icon,
} from "/src/components/organisms/pages/indexPages";
import React, { useState } from "react";

export const StudentGrades = ({ showCardShadow }) => {
  const [tableType, setTableType] = useState("grades");
  const { state } = useLocation();
  const student = state.student;
  const course = state.course;

  const shadowClasses = showCardShadow
    ? "lg:shadow-lg lg:rounded-3xl lg:overflow-hidden"
    : "";

  return (
    <>
      <div className="flex h-auto w-full justify-start pt-10">
        <Link to={"/courses/students"} state={{ courses: course }}>
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
        className={`flex w-[310px] flex-col items-center lg:mx-16 lg:h-[770px] lg:w-full ${shadowClasses}`}
      >
        <div className="flex w-[100vw] flex-col items-start gap-3 bg-neutral-100 p-5 lg:w-full lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-10">
          <div className="lg:flex lg:gap-8">
            <div>
              <h1 className="text-2xl font-bold">{student.name}</h1>
              <div className="text-lg text-neutral-400">
                <p>Gender: {student.gender}</p>
                <p>Rut: {student.rut}</p>
                <p>Born date: {student.bornDate}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <button
              className="rounded-xl bg-primary-200 px-6 py-3 text-lg text-white"
              onClick={() => setTableType("grades")}
            >
              Grades
            </button>
            <button
              className="rounded-xl bg-primary-500 px-6 py-3 text-lg text-white"
              onClick={() => setTableType("observations")}
            >
              Observations
            </button>
          </div>
        </div>

        {tableType === "grades" && <Table student={student} type="grades" />}
        {tableType === "observations" && (
          <Table student={student} type="observations" />
        )}
      </div>
    </>
  );
};

const Table = ({ student, type }) => {
  return (
    <div className="flex h-full w-full items-center justify-center  lg:px-36">
      <div className="my-4 grid w-[330px] grid-cols-2  overflow-hidden rounded-3xl shadow-lg lg:max-h-[380px]  lg:w-full lg:overflow-y-scroll lg:scrollbar-thin lg:scrollbar-track-neutral-100 lg:scrollbar-thumb-neutral-200">
        <div className="flex h-[80px] items-center justify-center bg-primary-500 text-xl font-bold text-white">
          {type === "grades" ? "Test names" : "Type"}
        </div>
        <div className="flex h-[80px] items-center justify-center bg-primary-500 text-xl font-bold text-white">
          {type === "grades" ? "Grade" : "Observation"}
        </div>

        {student[type].map((obj, index) => (
          <React.Fragment key={index}>
            <div
              className={`flex items-center justify-center p-4 ${
                index % 2 === 0 ? "bg-gray-200" : "bg-white"
              }`}
            >
              {type === "grades" ? obj.name : obj.type}
            </div>
            <div
              className={`flex items-center justify-center p-4 ${
                index % 2 === 0 ? "bg-gray-200" : "bg-white"
              }`}
            >
              {type === "grades" ? obj.grade : obj.observation}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
