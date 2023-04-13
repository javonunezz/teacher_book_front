import "./index.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { useState } from "react";
import { Login } from "./components/Pages/Login/Login";
import { PrivateRoutes } from "./components/PrivateRoutes";
import { PublicRoutes } from "./components/PublicRoutes";

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <>
      {logged ? (
        <div className="flex h-screen w-screen flex-col bg-gray-light md:flex-row">
          <Sidebar />
          <PrivateRoutes />
        </div>
      ) : (
        <PublicRoutes loggedValidate={setLogged} />
      )}
    </>
  );
}

export default App;
