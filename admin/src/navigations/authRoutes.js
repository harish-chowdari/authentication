import { lazy } from "react";
import ROUTES from "./routes";


const Login = lazy(() => import("../auth/Login"));
const Signup = lazy(() => import("../auth/Signup"));
const PasswordReset = lazy(() => import("../auth/PasswordReset"));
const Home = lazy(() => import("../auth/Home"));

export const authRoutes = [
    { path: ROUTES.LOGIN, element: <Login /> },
    { path: ROUTES.SIGNUP, element: <Signup /> },
    { path: ROUTES.PASSWORD_RESET, element: <PasswordReset /> },
    { path: ROUTES.HOME, element: <Home /> },
];