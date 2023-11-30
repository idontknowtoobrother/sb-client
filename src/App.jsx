import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';

import Welcome from './pages/Welcome.jsx'
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import CWelcome from "./pages/CustomerRole/CWelcome.jsx";
import CReservation from "./pages/CustomerRole/CReservation.jsx";
import CUserEdit from "./pages/CustomerRole/CUserEdit.jsx";
import CHistoryReservation from "./pages/CustomerRole/CHistoryReservation.jsx";

function App() {
	return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/customer/welcome" element={<CWelcome/>} />
                <Route path="/customer/reservation" element={<CReservation/>} />
                <Route path="/customer/user-edit" element={<CUserEdit/>} />
                <Route path="/customer/history-reservation" element={<CHistoryReservation/>} />
            </Routes>
        </div>
    );
}

export default App;
