import "./index.css";
import { Sidebar } from "./components/Organisms/Sidebar";
import { useState } from "react";
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
  );
}

export default App;
