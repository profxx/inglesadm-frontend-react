import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Calendar from '../pages/Calendar';
import Students from '../pages/Students';
import Finance from '../pages/Finance';
import Classroom from '../pages/Classroom';
import StudentProfile from '../pages/StudentProfile';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/students" element={<Students />} />
            <Route path="/studentprofile" element={<StudentProfile />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/classroom" element={<Classroom />} />
            <Route path='/student' element={<StudentProfile />} />
        </Routes>
    );
}

export default AppRoutes;
