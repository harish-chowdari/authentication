import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import PasswordReset from "./auth/PasswordReset";
import Layout from "./layout/Layout";


const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element= {<Signup />} />
                <Route path="/reset" element= {<PasswordReset/>} />
                <Route path="/home/:userId" element={<Layout />} >
                {/* <Route path="appointment-form" element={<AppointmentForm />} />
                <Route path="view-appointments" element={<ViewAppointments />} /> 
                <Route path="appointment-details/:appointmentId" element={<AppointmentDetails />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
