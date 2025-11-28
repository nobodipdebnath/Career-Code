import { createBrowserRouter } from "react-router";
import Root from "../LayOut/Root";
import HomePage from "../Pages/HomePage";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import JobDetales from "../components/Share/JobDetales";
import PrivetRouter from "./PrivetRouter";
import JobApply from "../components/Share/JobApply";
import MyApplications from "../Pages/MyApplications";
import AddJob from "../Pages/AddJob";

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
            },
            {
                path: 'jobs/:id',
                element: <PrivetRouter>
                    <JobDetales></JobDetales>
                </PrivetRouter>,
                loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path:'/jobApply/:id',
                element: <PrivetRouter>
                    <JobApply></JobApply>
                </PrivetRouter>
            },
            {
                path: '/myApplications',
                element: <PrivetRouter>
                    <MyApplications></MyApplications>
                </PrivetRouter>
            },
            {
                path: 'addJob',
                element: <PrivetRouter>
                    <AddJob></AddJob>
                </PrivetRouter>
            }
        ]
    }
])
export default router;