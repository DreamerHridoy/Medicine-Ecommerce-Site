/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart, _refetch, _totalPrice, totalItem] = useCart();

  const handleLogOut = () => {
    logOut().catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/" className="hover:text-amber-400 duration-200">
          Home
        </Link>
      </li>
      <li>
        <Link to="/shops" className="hover:text-amber-400 duration-200">
          Shop
        </Link>
      </li>
      {!user && (
        <li>
          <Link to="/" className="hover:text-amber-400 duration-200">
            Join Us
          </Link>
        </li>
      )}
      {user && isAdmin && (
        <li>
          <Link
            to="/dashboard/adminHome"
            className="hover:text-amber-400 duration-200"
          >
            Dashboard
          </Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link
            to="/dashboard/userHome"
            className="hover:text-amber-400 duration-200"
          >
            Dashboard
          </Link>
        </li>
      )}
      <li>
        <Link
          to="/dashboard/carts"
          className="flex items-center gap-1 hover:text-amber-400 duration-200"
        >
          <FaShoppingCart className="text-xl" />
          <div className="badge badge-warning">+{totalItem}</div>
        </Link>
      </li>
      {!user && (
        <li>
          <Link to="/login" className="hover:text-amber-400 duration-200">
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-50 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-md">
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-3 shadow bg-gray-900 text-white rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link
          to="/"
          className="text-xl font-bold ml-2 hover:text-amber-400 transition"
        >
          🧪 Medicine Shop
        </Link>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">{navOptions}</ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        {/* Profile Dropdown */}
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-10 rounded-full border-2 border-amber-400"
              />
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-gray-900 text-white rounded-box w-52"
            >
              <li>
                <Link to="/dashboard/userHome" className="hover:text-amber-400">
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="hover:text-amber-400 text-left"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Language Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
            🌐 Language
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 p-2 shadow bg-gray-900 text-white rounded-box w-36"
          >
            <li className="hover:text-amber-400">English</li>
            <li className="hover:text-amber-400">বাংলা</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
