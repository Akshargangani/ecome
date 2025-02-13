import { createBrowserRouter } from 'react-router-dom';
import App from "../App";
// import { Children } from 'react';
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path :"/",
        element : <App />,
        Children :[
            {
                path : "/",
                element : <Home />
            }
        ]
    }
])

export default router;