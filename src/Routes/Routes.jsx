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
import UserManagement from "../Pages/UserManagement/UserManagement";
import Payment from "../Pages/CheckOut/Payment";
import AdminHome from "../Components/AdminHome/AdminHome";
import UserHome from "../Components/UserHome/UserHome";
import PaymentHistory from "../Pages/CheckOut/PaymentHistory";
import InvoicePage from "../Pages/InvoicePage/InvoicePage";
import CategoryManagement from "../Pages/CategoryManagement/CategoryManagement";
import PaymentManagement from "../Pages/PaymentManagement/PaymentManagement";

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
        path: "user-management",
        element: <UserManagement></UserManagement>,
      },
      {
        path: "category-management",
        element: <CategoryManagement></CategoryManagement>,
      },
      {
        path: "payment-management",
        element: <PaymentManagement></PaymentManagement>,
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
