import { image } from "/src/components/organisms/pages/indexPages";

const INFO_TEACHER = {
  name_teacher: "Name Teacher",
  subject_teacher: "Subject Teacher",
  born_date: "11/11/1111",
  id: "11.111.111-1",
  genre: "Male",
  email: "email@email.cl",
};

export const CardTeacher = () => {
  return (
    <div className="h-97 flex w-80 flex-col items-center justify-center rounded-3xl bg-neutral-100 p-7 shadow-[3px_3px_10px_-2px_#000000]">
      <img
        src={image}
        className="h-40 w-40 rounded-full border-2 border-neutral-400"
        alt="teacher_image"
      />
      <h1 className="mb-1 mt-3 text-center text-2xl font-bold">
        {INFO_TEACHER.name_teacher}
      </h1>
      <h2 className="text-lg">{INFO_TEACHER.subject_teacher}</h2>
      <ul className="mb-2 mr-auto mt-6 space-y-1 text-lg text-neutral-400">
        <li>{`ID: ${INFO_TEACHER.id}`}</li>
        <li>{`Genre: ${INFO_TEACHER.genre}`}</li>
        <li>{`Born date: ${INFO_TEACHER.born_date}`}</li>
        <li>{`Email: ${INFO_TEACHER.email}`}</li>
      </ul>
    </div>
  );
};
