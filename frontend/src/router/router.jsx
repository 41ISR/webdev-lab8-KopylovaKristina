import { createBrowserRouter } from "react-router-dom"
import Register from "../pages/register"
import Login from "../pages/login"
import Layout from "../pages/Layout"
import Board from "../pages/Board"
import Logout from "../pages/Logout"

export const router = createBrowserRouter(
    [
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/login",
            element: <Login />
        },

        {
            path: "/logout",
            element: <Logout />
        },
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Board />
                }
            ]
        }
    ]
)