import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "../axios";
import SecondaryLoader from "../../../admin/src/components/SecondaryLoader";

const Login = () => {
    const [login, setLogin] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState(""); 
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(""); 

        try {
            setIsLoading(true);
            const res = await axios.post("/user-login", { ...login });
            const userId = res.data._id; 
            localStorage.setItem("userId", userId);
            navigate(`/home/${userId}`);
        } catch (error) {
            // console.log(error);
            setErrorMessage( error?.response?.data?.error || "An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left side image (hidden on small screens) */}
            <div className="hidden md:flex md:w-1/2">
                {/* <img
                    src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?semt=ais_hybrid"
                    alt="Hospital and Patient"
                className="w-full h-full object-cover"
                /> */}
            </div>
            
            {/* Right side login form */}
            <div className="flex flex-col justify-center items-center md:w-1/2 w-full bg-green-100 p-6">
                <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-green-800 text-center mb-4">Login</h2>

                {errorMessage && (
                    <p className="text-red-00 text-sm text-center mb-3">{errorMessage}</p>
                )}

                <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={login.email}
                    className="w-full p-3 mb-3 border border-green-300 rounded focus:outline-none focus:border-green-500 bg-white bg-opacity-80"
                />

                <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={login.password}
                    className="w-full p-3 mb-3 border border-green-300 rounded focus:outline-none focus:border-green-500 bg-white bg-opacity-80"
                />

                <p className="text-sm text-green-700 text-center mb-3">
                    Forgot password? Update{" "}
                    <Link to="/reset" className="text-green-600 hover:underline"> here </Link>
                </p>

                <button
                    type="submit"
                    className={`w-full bg-green-800 ${isLoading ? "cursor-not-allowed opacity-70" : "cursor-pointer"} text-white py-2 flex items-center justify-center rounded hover:bg-green-700 transition-all`}
                >
                    {isLoading ? "" : "Login"}{" "}
                    <SecondaryLoader isLoading={isLoading} />
                </button>

                <p className="mt-4 text-center text-green-700">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-green-600 hover:underline">
                    Signup
                    </Link>
                </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
