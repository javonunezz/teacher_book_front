import { TbChartInfographic } from "react-icons/tb";
import { ClassCard } from "./ClassCard";
import { BiMath } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import { FiMusic } from "react-icons/fi";  


export const DailyCourses = () => {
  return (
    <div className="w-full h-full flex flex-col p-4 justify-center items-center">
      <h1 className="text-black mb-2 font-semibold text-center">My Classes</h1>
      <ClassCard 
        titleClass="Your own education way" 
        textClass="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, odit." 
        icon={<TbChartInfographic />}  
        colorIcon="white"
        cardColor="bg-black"
        />
      <ClassCard
        titleClass="Mathematic" 
        textClass="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, odit." 
        icon={<BiMath />}  
        colorIcon="white"
        cardColor="bg-blue-light"
        />
      <ClassCard
        titleClass="Literature" 
        textClass="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, odit." 
        icon={<ImBooks />}  
        colorIcon="white"
        cardColor="bg-green-light"
        />
      <ClassCard 
        titleClass="Music" 
        textClass="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, odit." 
        icon={<FiMusic />}  
        colorIcon="white"
        cardColor="bg-yellow-light"
      />  
    </div>
  )
}

