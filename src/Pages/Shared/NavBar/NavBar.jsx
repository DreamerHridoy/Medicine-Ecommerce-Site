import { useContext } from "react";
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
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/shops">Shop</Link>
      </li>
      {!user && (
        <li>
          <Link to="/">Join Us</Link>
        </li>
      )}
      {user && isAdmin && (
        <li>
          <Link to="/dashboard/adminHome">Dashboard</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/userHome">Dashboard</Link>
        </li>
      )}
      <li>
        <Link to="/dashboard/carts">
          <FaShoppingCart className="mr-2"></FaShoppingCart>
          <div className="badge badge-secondary">+{totalItem}</div>
        </Link>
      </li>

      {user ? (
        <></>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            Medicine Shop
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn"
            >
              <img
                src={user.photoURL}
                alt="Profile image"
                className="size-10 rounded-full"
              />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 text-black rounded-box z-[1] mt-4 w-52 p-2 shadow"
            >
              <li>
                <a>Update profile</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <button onClick={handleLogOut}>LogOut</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
