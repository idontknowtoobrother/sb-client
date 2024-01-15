import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';

import Welcome from './pages/Welcome.jsx'
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import CWelcome from "./pages/CustomerRole/CWelcome.jsx";
import CReservation from "./pages/CustomerRole/CReservation.jsx";
import CUserEdit from "./pages/CustomerRole/CUserEdit.jsx";
import CHistoryReservation from "./pages/CustomerRole/CHistoryReservation.jsx";
import ManageUser from "./pages/StaffRole/ManageUser.jsx";
import ManageQueue from "./pages/StaffRole/ManageQueue.jsx";
import { useSelector } from "react-redux";
import ManageUserEdit from "./pages/StaffRole/ManageUserEdit.jsx";


function App() {

    const { user } = useSelector((state) => state.user);
    const isAuthenticated = user !== null;
    const isStaff = user?.role === "staff";
    const navigateToCustomerWelcome = () => {
        return <Navigate to="/customer/welcome" />
    }
    const navigetToLogin = () => {
        return <Navigate to="/login" />
    }

	return (
        <div>
            <Routes>
                <Route path="/" element={
                    isAuthenticated ? navigateToCustomerWelcome() : 
                    <Welcome />
                }/>
                <Route path="/login" element={
                    isAuthenticated ? navigateToCustomerWelcome() : 
                    <Login /> 
                }/>
                <Route path="/signup" element={
                    isAuthenticated ? navigateToCustomerWelcome() : 
                    <Signup />
                } />
                <Route path="/customer/welcome" element={ 
                    isAuthenticated ? <CWelcome/> : 
                    navigetToLogin()
                } />
                <Route path="/customer/reservation" element={
                    isAuthenticated ? <CReservation/> :
                    navigetToLogin()
                } />
                <Route path="/customer/user-edit" element={
                    isAuthenticated ? <CUserEdit/> :
                    navigetToLogin() 
                } />
                <Route path="/customer/history-reservation" element={
                    isAuthenticated ? <CHistoryReservation/> : 
                    navigetToLogin()    
                } />
                <Route path="/management/user" element={
                    isAuthenticated && isStaff ? <ManageUser/> :
                    navigetToLogin()
                }/>
                 <Route path="/management/user/:userId"  element={
                    isAuthenticated && isStaff ? <ManageUserEdit/> : 
                    navigetToLogin()
                }/>
                <Route path="/management/queue" element={
                    isAuthenticated && isStaff ? <ManageQueue/> : 
                    navigetToLogin()
                }/>
               
            </Routes>
        </div>
    );
}

export default App;
