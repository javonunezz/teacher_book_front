import './index.css';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { StudentsPage } from './components/StudentsPage';
import { CoursesPage } from './components/CoursesPage';


function App() {
  return (
    <div className="h-screen w-screen bg-gray-300 flex flex-col md:flex-row ">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="*" element={<img src="https://http.cat/404" alt="Not Found"/> } />
      </Routes>
    </div>
  );
};

export default App
