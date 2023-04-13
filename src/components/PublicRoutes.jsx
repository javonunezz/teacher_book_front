import { Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Login/Login';


export const PublicRoutes = ({ loggedValidate }) => {
  return (
    <Routes>
        <Route path="/" element={<Login loggedValidate={ loggedValidate }/>} />
    </Routes>
  );
};

