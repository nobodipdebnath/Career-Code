import { createBrowserRouter } from "react-router";
import Root from "../LayOut/Root";
import HomePage from "../Pages/HomePage";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true, Component: HomePage
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'signIn',
                Component: SignIn
            }
        ]
    }
])
export default router;