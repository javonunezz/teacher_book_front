import { TableCourse } from "../../Tables/TableCourse";
import { TableStudent } from "../../Tables/TableStudent";
import { TableTeacher } from "../../Tables/TableTeacher";


export const TablesPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row md:items-center md:justify-center ">
      <div className="md:w-1/4 h-2/4 p-4 my-4 mx-10 flex items-center bg-blue-500 rounded-lg flex-col bg-opacity-30 items-start">
        <h1 className='text-2xl font-bold mb-2'> Students 👨‍🎓 </h1>
        <TableStudent />
      </div>
      <div className="md:w-1/4 h-2/4 p-4 my-4 mx-10 flex items-center bg-red-500 rounded-lg flex-col bg-opacity-30 items-start">
        <h1 className='text-2xl font-bold mb-2'> Courses 🎒 </h1>
        <TableCourse />
      </div>
      <div className="md:w-1/4 h-2/4 p-4 my-4 mx-10 flex items-center bg-yellow-500 rounded-lg flex-col bg-opacity-30 items-start">
        <h1 className='text-2xl font-bold mb-2'> Teachers 👩‍🏫 </h1>
        <TableTeacher />
      </div>
    </div>
  )
}

