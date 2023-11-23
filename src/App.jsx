import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';

import Welcome from './pages/Welcome.jsx'
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import CWelcome from "./pages/CustomerRole/CWelcome.jsx";

function App() {
	return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/customer/welcome" element={<CWelcome/>} />
            </Routes>
        </div>
    );
}

export default App;
