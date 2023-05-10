import "./index.css";
import { Sidebar } from "./components/Organisms/Sidebar";
import { useState } from "react";
import { Login } from "./components/Organisms/Login";

function App() {
  return (
    <>
      <div className="bg-gray-light relative h-screen w-screen md:flex-row">
        <div className="w-full md:w-2/3"></div>
        <div className="absolute bottom-0 w-full">
          <Sidebar />
        </div>
      </div>
    </>
    // TODO revisar como implementar sidebar y login en conjunto (el login no lleva sidebar)
    // <div className="flex w-screen flex-col items-center font-source-sans">
    //   <Login />
    // </div>
  );
}

export default App;
