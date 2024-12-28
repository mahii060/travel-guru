import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './layout/RootLayout';
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NewsPage from './pages/NewsPage/NewsPage';
import Destination from './pages/Destination/Destination';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';

const router = createBrowserRouter([
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
        element: <NewsPage />
      },
      {
        path: "/destination",
        element: <Destination />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
