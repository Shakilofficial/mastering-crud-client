import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import About from "../pages/About/About";
import AddService from "../pages/Admin/AddService";
import AdminHome from "../pages/Admin/AdminHome";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
      {
        path: "addService",
        element: <AddService />,
      },
    ],
  },
]);

export default routes;
