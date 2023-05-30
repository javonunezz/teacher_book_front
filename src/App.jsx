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
  School,
  Courses,
  CourseSubject,
  StudentGrades,
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
            path="/courses/students/student"
            element={
              <MainContent page={<StudentGrades showCardShadow={true} />} />
            }
          />
          <Route
            path="/school"
            element={<MainContent page={<School showCardShadow={true} />} />}
          />
          <Route
            path="/courses"
            element={<MainContent page={<Courses showCardShadow={true} />} />}
          />
          <Route
            path="/courses/students"
            element={
              <MainContent page={<CourseSubject showCardShadow={true} />} />
            }
          />
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
