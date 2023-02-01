import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"
import './App.css';
import Navbar from '././components/Navbar/Navbar';
import Login from "././components/Auth/Login";
import Register from "././components/Auth/Register";

function App() {
  const router = createBrowserRouter([
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
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
