import {createBrowserRouter, RouterProvider, Route, Outlet} from "react-router-dom"
import './App.css';
import './style.scss'
import Navbar from '././components/Navbar/Navbar';
import Home from "././components/Home/Home";
import Login from "././components/Auth/Login";
import Register from "././components/Auth/Register";
import Profile from "./components/Profile/Profile";
import { useContext } from "react";
import { DarkModeContext } from "././context/darkModeContext";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'

function App() {
  const {currentUser} = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext);

  const queryClient = new QueryClient()
  
  const Layout = () => {
    return(
      <QueryClientProvider client={queryClient}>
          <div className={`theme-${darkMode ? "dark" : "light"}`}>
            <Navbar />
            <Outlet />
          </div>
      </QueryClientProvider>
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
