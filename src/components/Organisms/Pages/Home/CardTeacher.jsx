import { info } from "autoprefixer";
import imagen from "./../../../../assets/chancho.jpg";

const infoTeacher = {
  born_date: "11/11/1111",
  id: "11.111.111-1",
  genre: "Male",
  email: "monito@unab.cl",
};

export const CardTeacher = () => {
  return (
    <div className="h-97 flex w-80 flex-col items-center justify-center rounded-3xl bg-neutral-100 p-7 drop-shadow-3xl">
      <img
        src={imagen}
        className="h-40 w-40 rounded-full border-2 border-neutral-400"
        alt="mono_imagen"
      />
      <h1 className="mb-1 mt-3 text-3xl font-bold">Mono Gonzalez</h1>
      <h2 className="text-base">Profesor de Biologia</h2>
      <ul className="mb-2 mr-auto mt-6 space-y-1 text-base text-neutral-400">
        <li>{`Born date: ${infoTeacher.born_date}`}</li>
        <li>{`ID: ${infoTeacher.id}`}</li>
        <li>{`Genre: ${infoTeacher.genre}`}</li>
        <li>{`Email: ${infoTeacher.email}`}</li>
      </ul>
    </div>
  );
};
