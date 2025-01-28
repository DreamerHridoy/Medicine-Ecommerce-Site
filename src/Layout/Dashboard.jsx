/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaAd,
  FaAdversal,
  FaBook,
  FaCalendar,
  FaCartArrowDown,
  FaCoins,
  FaEnvelope,
  FaHome,
  FaList,
  FaSalesforce,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";

import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
// import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const [isSeller] = useSeller();

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-blue-400">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/user-management">
                  <FaUsers></FaUsers>
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/category-management">
                  <FaCartArrowDown></FaCartArrowDown>
                  Manage Category
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment-management">
                  <FaCoins></FaCoins>
                  Payment management
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/sales">
                  <FaSalesforce></FaSalesforce>
                  Sales Report
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/banners">
                  <FaAdversal></FaAdversal>
                  Manage Banner Advertise
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li> */}
            </>
          ) : isSeller ? (
            <>
              <li>
                <NavLink to="/dashboard/sales/home">
                  <FaHome></FaHome>
                  Seller Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaAd></FaAd>
                  Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/sales/medicine-management">
                  <FaCalendar></FaCalendar>
                  Manage Medicine
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/sales/paymentHistory">
                  <FaList></FaList>
                  Real Payment History
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaCalendar></FaCalendar>
                  Not History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaAd></FaAd>
                  Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaList></FaList>
                  Real Payment History
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch></FaSearch>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
