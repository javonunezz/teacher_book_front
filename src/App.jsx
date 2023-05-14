import "./index.css";
import { Sidebar } from "./components/organisms/Sidebar";
import { useState } from "react";
import { Login } from "./components/organisms/Login";
import { Home } from "./components/organisms/pages/page_home/Home.jsx";
import { MainContent } from "./components/organisms/MainContent";

function App() {
  return (
    <>
      <div className="bg-gray-light relative flex h-screen w-screen flex-col lg:flex-row">
        <Sidebar />
        <MainContent page={<Home />} />
      </div>
    </>
    // TODO revisar como implementar sidebar y login en conjunto (el login no lleva sidebar)
    // <div className="flex w-screen flex-col items-center font-source-sans">
    //   <Login />
    // </div>
  );
}

export default App;
