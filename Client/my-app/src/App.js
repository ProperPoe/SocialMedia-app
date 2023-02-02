import {createBrowserRouter, RouterProvider, Route, Outlet} from "react-router-dom"
import './App.css';
import Navbar from '././components/Navbar/Navbar';
import Home from "././components/Home/Home";
import Login from "././components/Auth/Login";
import Register from "././components/Auth/Register";
import Profile from "./components/Profile/Profile";

function App() {
  const Layout = () => {
    return(
      <div>
        <Navbar />
        <Outlet />
      </div>
    )
  }
  //Router with children
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
