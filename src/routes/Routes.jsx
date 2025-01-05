import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsPage from "../pages/NewsPage/NewsPage";
import Destination from "../pages/Destination/Destination";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/news",
                element: <ProtectedRoute><NewsPage /></ProtectedRoute>
            },
            {
                path: "/destination",
                element: <ProtectedRoute><Destination /></ProtectedRoute>
            },
            {
                path: "/blog",
                element: <ProtectedRoute><Blog /></ProtectedRoute>
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    },
]);