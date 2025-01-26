import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import CategoryDetails from "../Pages/Category/CategoryDetails";
import Shop from "../Pages/Shop/Shop";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Carts/Cart";
import AllUsers from "../Pages/AllUsers/AllUsers";
import Payment from "../Pages/CheckOut/Payment";
import AdminHome from "../Components/AdminHome/AdminHome";
import UserHome from "../Components/UserHome/UserHome";
import PaymentHistory from "../Pages/CheckOut/PaymentHistory";
import InvoicePage from "../Pages/InvoicePage/InvoicePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "shops",
        element: <Shop />,
      },
      {
        path: "categories/:categoryId",
        element: <CategoryDetails />,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "carts",
        element: <Cart />,
      },
      // admin routes
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "invoice",
        element: <InvoicePage />,
      },

      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
    ],
  },
]);
