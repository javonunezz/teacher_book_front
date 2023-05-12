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
    <div className="h-97 flex w-80 flex-col items-center justify-center rounded-3xl bg-neutral-100 p-7 shadow-[3px_3px_10px_-2px_#000000]">
      <img
        src={imagen}
        className="h-40 w-40 rounded-full border-2 border-neutral-400"
        alt="mono_imagen"
      />
      <h1 className="mb-1 mt-3 text-center text-2xl font-bold">
        Mono Gonzalez
      </h1>
      <h2 className="text-lg">Profesor de Biologia</h2>
      <ul className="mb-2 mr-auto mt-6 space-y-1 text-lg text-neutral-400">
        <li>{`ID: ${infoTeacher.id}`}</li>
        <li>{`Genre: ${infoTeacher.genre}`}</li>
        <li>{`Born date: ${infoTeacher.born_date}`}</li>
        <li>{`Email: ${infoTeacher.email}`}</li>
      </ul>
    </div>
  );
};
