import "./index.css";
import {
  Routes,
  Route,
  useLocation,
  Login,
  Sidebar,
  MainContent,
  Home,
  Settings,
} from "/src/indexMain";

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
