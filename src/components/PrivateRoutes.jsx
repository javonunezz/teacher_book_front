import { Route, Routes } from 'react-router-dom';
import { CoursesPage } from './Pages/Course/CoursesPage';
import { HomePage } from './Pages/Home/HomePage';
import { StudentsPage } from './Pages/Student/StudentsPage';
import { TablesPage } from './Pages/Tables/TablesPage';
import { Login } from './Pages/Login/Login';


export const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/tables" element={<TablesPage />} />
    </Routes>
  );
};

