import { DailyCourses } from "./DailyCourses";
import { ProfileTeacher } from "./ProfileTeacher";


export const HomePage = () => {


  return (
      <div className="w-full grid grid-cols-1 md:grid-cols-3 md:grid-cols-minmax(186px, 1fr) bg-gray-light justify-start sm:grid-flow-row">
        <div className="w-full">
          <DailyCourses />
        </div>
        <div className="w-full">
          <ProfileTeacher />
        </div>
      </div>
  );
};
