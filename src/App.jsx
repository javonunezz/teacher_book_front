import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Login } from "./components/organisms/Login";
import { Sidebar } from "./components/organisms/Sidebar";
import { MainContent } from "./components/organisms/MainContent";
import { Home } from "./components/organisms/pages/page_home/Home.jsx";
import { Settings } from "./components/organisms/pages/page_settings/Settings";

function App() {
  const location = useLocation();
  const showSidebar = location.pathname !== "/login";

  return (
    <>
      <div className="bg-gray-light relative flex h-screen w-screen flex-col lg:flex-row">
        {showSidebar && <Sidebar />}

        <Routes>
          <Route path="*" element={<MainContent page={<Home />} />} />
          <Route path="/home" element={<MainContent page={<Home />} />} />
          <Route
            path="/settings"
            element={<MainContent page={<Settings showCardShadow={true} />} />}
          />
          <Route path="/login" element={<MainContent page={<Login />} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
