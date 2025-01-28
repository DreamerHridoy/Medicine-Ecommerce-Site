import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminHome from "../Components/AdminHome/AdminHome";
import UserHome from "../Components/UserHome/UserHome";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Cart from "../Pages/Carts/Cart";
import CategoryDetails from "../Pages/Category/CategoryDetails";
import CategoryManagement from "../Pages/CategoryManagement/CategoryManagement";
import Payment from "../Pages/CheckOut/Payment";
import Home from "../Pages/Home/Home/Home";
import InvoicePage from "../Pages/InvoicePage/InvoicePage";
import Login from "../Pages/Login/Login";
import PaymentManagement from "../Pages/PaymentManagement/PaymentManagement";
import Secret from "../Pages/Shared/Secret/Secret";
import Shop from "../Pages/Shop/Shop";
import SignUp from "../Pages/SignUp/SignUp";
import UserManagement from "../Pages/UserManagement/UserManagement";
import PrivateRoute from "./PrivateRoute";
import SalesManagement from "../Pages/Sales";
import SalesHome from "../Pages/Sales/SalesHome";
import PaymentManagementSales from "../Pages/Sales/paymentHistory";
import AdvertiseSeller from "../Pages/Advertise";
import MedicineManagement from "../Pages/MedicineManagement/MedicineManagement";
import NotFound from "../Pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "shops", element: <Shop /> },
      { path: "categories/:categoryName", element: <CategoryDetails /> },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      { path: "carts", element: <Cart /> },
      { path: "payment", element: <Payment /> },
      { path: "user-management", element: <UserManagement /> },
      { path: "category-management", element: <CategoryManagement /> },
      { path: "payment-management", element: <PaymentManagement /> },
      { path: "invoice", element: <InvoicePage /> },

      { path: "seller/advertise", element: <AdvertiseSeller /> },
      { path: "adminHome", element: <AdminHome /> },
      { path: "userHome", element: <UserHome /> },
      {
        path: "sales",
        children: [
          { path: "", element: <SalesManagement /> },
          { path: "home", element: <SalesHome /> },
          { path: "medicine-management", element: <MedicineManagement /> },
          { path: "paymentHistory", element: <PaymentManagementSales /> },
        ],
      },
    ],
  },
]);
