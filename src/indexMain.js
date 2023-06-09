import { Routes, Route, useLocation } from "react-router-dom";
import { Login } from "/src/components/organisms/Login";
import { Sidebar } from "/src/components/organisms/Sidebar";
import { MainContent } from "/src/components/organisms/MainContent";
import { Home } from "/src/components/organisms/pages/page_home/Home";
import { Settings } from "/src/components/organisms/pages/page_settings/Settings";
import { School } from "./components/organisms/pages/page_school/School";
import { Courses } from "/src/components/organisms/pages/page_courses/Courses";
import { CourseSubject } from "./components/organisms/pages/page_courses/CourseSubject";
import { StudentGrades } from "./components/organisms/pages/page_courses/StudentGrades";

export {
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
};
