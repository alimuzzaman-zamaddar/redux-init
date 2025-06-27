import App from "@/App";
import { Tasks } from "@/Pages/Tasks";
import { User } from "@/Pages/User";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
    {
        path: "/",
        element : <App/>,
            children: [
        {
            path: "/user",
            element: <User/>
        },
        {
            path: "/tasks",
            element: <Tasks/>
        }
    ]
    },

])

export default router;