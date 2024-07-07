import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import About from "../pages/About/About";
import AddService from "../pages/Admin/AddService";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
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
        path: "addService",
        element: <AddService />,
      },
    ],
  },
]);

export default routes;
