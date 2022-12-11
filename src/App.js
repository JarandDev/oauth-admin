import './App.css';
import Home from "./routes/home/Home";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import Dashboard from "./routes/dashboard/Dashboard";
import NewApplication from "./routes/new/application/NewApplication";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
    },
    {
        path: "/new/application",
        element: <NewApplication/>,
    }
]);

function App() {
    return (
        <div className="App">
            <h1>OAuth Administration</h1>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
