import { IconContext } from "react-icons";

export const ClassCard= ( {titleClass, textClass ,icon, colorIcon, cardColor} ) => {
  return (
    <div className={`${cardColor} flex flex-row mt-4 mx-2 p-2 rounded-md items-center min-w-24`}>
      <div className="text-white mx-4">
        <h2 className="font-bold">{ titleClass }</h2>
        <p className="font-thin">{ textClass }</p>
      </div>
      <IconContext.Provider value={{ color: colorIcon, size: "3em" }}>
        <div className="mr-2">
          {icon}
        </div>
      </IconContext.Provider>
    </div>
  )
  
  
}

