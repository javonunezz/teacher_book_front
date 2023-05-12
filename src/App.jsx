import "./index.css";
import { Sidebar } from "./components/organisms/Sidebar";
import { useState } from "react";
import { Login } from "./components/organisms/Login";
import { PageHome } from "./components/Organisms/Pages/Home/PageHome";

function App() {
  return (
    <>
      <div className="bg-gray-light relative flex h-screen w-screen md:flex-row">
        <div className="order-1 mt-8 flex h-full w-full justify-center md:order-2">
          <PageHome />
        </div>
        <div className="fixed bottom-0 order-2 w-full md:sticky md:left-0 md:order-1 md:w-auto">
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
