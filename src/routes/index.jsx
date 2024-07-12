import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import About from "../pages/About/About";
import AddService from "../pages/Admin/AddService";
import AdminHome from "../pages/Admin/AdminHome";
import Booking from "../pages/Booking/Booking.jsx";
import Contact from "../pages/Contact/Contact";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import Profile from "../pages/User/Profile";
import TrackOrder from "../pages/User/TrackOrder";
import PrivateRoute from "./PrivateRoute.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
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
        element: (
          <PrivateRoute>
            <Services />
          </PrivateRoute>
        ),
      },
      {
        path: "booking",
        element: (
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        ),
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
    path: "/user",
    element: <App />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: "orders",
        element: <TrackOrder />,
      },
    ],
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
