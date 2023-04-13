import { BiUserCircle } from "react-icons/bi";
import { IconContext } from "react-icons";
import { BsChatDots } from "react-icons/bs";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { BiEdit } from "react-icons/bi";



export const ProfileTeacher = () => {
  return (
    <div className="min-h-72 h-full flex justify-center items-center">
      <div className="flex flex-col w-80 items-center bg-gray-light-2 m-2 border rounded-3xl p-2 relative">
        <button className="ml-full absolute right-0 mr-3 mt-1 p-0 bg-gray-light-2">
          <IconContext.Provider value={{ color: "black", size: "1.5em" }}>
            <BiEdit />
          </IconContext.Provider>
        </button>
        <img src="../../../../public/images/teacher.jpg" alt="Teacher Picture" className="w-36 h-36 rounded-3xl mt-4 border-4 border-solid border-black"/>
        <h1 className="text-4xl font-semibold m-2 text-center">Daniel Carrasco</h1>
        <h2>Profesor de Mates</h2>
        <div className="w-2/4 flex flex-row justify-between mt-8 mb-2">
          <IconContext.Provider value={{ color: "black", size: "1.5em" }}>
            <BsChatDots />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "black", size: "1.5em" }}>
            <HiOutlineVideoCamera />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "black", size: "1.5em" }}>
            <AiOutlineClockCircle />
          </IconContext.Provider>
        </div>
        <button className="flex flex-row items-center my-4 bg-black">
          <h2 className="mr-2 text-white">Connect</h2>
          <IconContext.Provider value={{ color: "white", size: "1em" }}>
            <HiOutlineUserPlus />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  )
}

