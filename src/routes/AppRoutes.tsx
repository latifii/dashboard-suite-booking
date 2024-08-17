import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings";
import Cabins from "../pages/Cabins";
import Settings from "../pages/Settings";
import Account from "../pages/Account";
import Login from "../pages/Login";
import Users from "../pages/Users";
import PageNotFound from "../pages/PageNotFound";
import AppLayout from "../pages/AppLayout";
import Booking from "../pages/Booking";
import CheckIn from "../pages/CheckIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate replace to="dashboard" /> },
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "bookings",
        element: <Bookings />,
      },
      { path: "bookings/:bookingId", element: <Booking /> },
      { path: "checkin/:bookingId", element: <CheckIn /> },
      { path: "cabins", element: <Cabins /> },
      { path: "users", element: <Users /> },
      { path: "settings", element: <Settings /> },
      { path: "account", element: <Account /> },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "*", element: <PageNotFound /> },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
