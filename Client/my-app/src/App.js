import {createBrowserRouter, RouteProvider, Route} from "react-router-dom"
import './App.css';
import Navbar from '././components/Navbar/Navbar';
import Login from "././components/Auth/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello Wrld</div>,
    }
  ])
  return (
    <div className="App">
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
