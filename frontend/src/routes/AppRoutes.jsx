import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Features from "../pages/Features";
import HowItWorks from "../pages/HowItWorks";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Transfer from "../pages/Transfer";
import Transaction from "../pages/Transaction";
import Profile from "../pages/Profile";
import Admin from "../pages/Admin";

import MainLayout from "../layout/MainLayout";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <AboutUs /> },
        { path: "/features", element: <Features /> },
        { path: "/how-it-works", element: <HowItWorks /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/transfer", element: <Transfer /> },
        { path: "/transaction", element: <Transaction /> },
        { path: "/profile", element: <Profile /> },
        { path: "/admin", element: <Admin /> },
        ],
    },
]);

export default AppRoutes;