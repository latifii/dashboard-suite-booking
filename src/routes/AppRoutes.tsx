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
        // children: [{ path: "bookings/:bookingId", element: <Booking /> }],
      },
      { path: "bookings/:bookingId", element: <Booking key={Math.random()} /> },
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
