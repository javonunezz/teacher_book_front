import { CardTeacher } from "./CardTeacher";
import { DailySchedule } from "./DailySchedule";
import { SubjectTeacher } from "./SubjectTeacher";

export const Home = () => {
  return (
    <div className="flex flex-wrap justify-center gap-y-10 md:grid md:grid-rows-2 md:gap-y-0">
      <div className="flex w-full flex-wrap items-center justify-center gap-10 lg:gap-20">
        <CardTeacher />
        <DailySchedule />
      </div>
      <div className="flex w-screen items-center justify-center">
        <SubjectTeacher />
      </div>
    </div>
  );
};
