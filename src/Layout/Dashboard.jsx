/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaAd,
  FaAdversal,
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
} from "react-icons/fa";

import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const [isSeller] = useSeller();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-white border-r border-gray-200 shadow-md">
        <div className="p-6 font-bold text-lg text-blue-600">Dashboard</div>
        <ul className="menu p-4 space-y-2">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome" className="nav-item">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/user-management" className="nav-item">
                  <FaUsers /> Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/category-management"
                  className="nav-item"
                >
                  <FaCartArrowDown /> Manage Category
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/payment-management"
                  className="nav-item"
                >
                  <FaCoins /> Payment Management
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/sales" className="nav-item">
                  <FaSalesforce /> Sales Report
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/banners" className="nav-item">
                  <FaAdversal /> Banner Management
                </NavLink>
              </li>
            </>
          ) : isSeller ? (
            <>
              <li>
                <NavLink to="/dashboard/sales/home" className="nav-item">
                  <FaHome /> Seller Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart" className="nav-item">
                  <FaShoppingCart /> My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review" className="nav-item">
                  <FaAd /> Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/sales/medicine-management"
                  className="nav-item"
                >
                  <FaCalendar /> Manage Medicine
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/sales/paymentHistory"
                  className="nav-item"
                >
                  <FaList /> Payment History
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome" className="nav-item">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history" className="nav-item">
                  <FaCalendar /> Order History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart" className="nav-item">
                  <FaShoppingCart /> My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review" className="nav-item">
                  <FaAd /> Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory" className="nav-item">
                  <FaList /> Payment History
                </NavLink>
              </li>
            </>
          )}

          {/* Shared Nav Links */}
          <div className="divider my-4 border-t border-gray-200"></div>
          <li>
            <NavLink to="/" className="nav-item">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad" className="nav-item">
              <FaSearch /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact" className="nav-item">
              <FaEnvelope /> Contact
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* Content */}
      <main className="flex-1 p-4 md:p-8 bg-gray-100 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
