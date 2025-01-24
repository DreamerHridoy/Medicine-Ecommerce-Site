import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MedicineCard = () => {
  // {item}
  // const {name, image, price, recipe} = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const handleAddToCart = () => {
    if (user && user.email) {
      //send cart item to the database
      const cartItem = {
        // menuId: _id,
        email: user.email,
        // name,
        // image,
        // price,
      };
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //   send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="" alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        $ price
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">name</h2>
        <p>recipe</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;
