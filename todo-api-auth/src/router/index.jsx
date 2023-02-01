import { Navigate, createBrowserRouter, redirect } from "react-router-dom";
import App from "../App";
import { checkUser } from "../auth";
import Login from "../views/Login";
import Logout from "../views/Logout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/logout",
        element: <Logout />,
        handle: () => {
            console.log("test");
        }
    },
]);

export default router;
