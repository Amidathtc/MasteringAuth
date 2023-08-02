import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/auth/Register";
import SignIn from "../pages/auth/SignIn";
import LayOut from "../components/common/LayOut";
import HomePage from "../pages/screen/HomePage";
import PrivateRouter from "./privateRouter";

export const mainRouter = createBrowserRouter([
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/sign-in',
        element: <SignIn />
    },
    {
        path: '/',
        element: <PrivateRouter>
             <LayOut/>
        </PrivateRouter>,
        children:[
            {
                index: true,
                element: <HomePage />
            }
        ]
    },
])