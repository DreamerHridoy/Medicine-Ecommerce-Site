import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch, totalPrice, totalItem] = useCart();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });
      }
    });
  };

  const handleChange = (cartId, quantity) => {
    if (quantity < 1) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `Invalid quantity`,
        showConfirmButton: false,
        timer: 1500
      });

      return;
    }

    axiosSecure
      .patch(`/carts/${cartId}`, {
        quantity: quantity
      })
      .then(() => refetch())
      .catch();
  };

  return (
    <div>
      <div className="flex justify-evenly mb-8">
        <h2 className="text-4xl">Items: {totalItem}</h2>
        <h2 className="text-4xl">Total Price: {totalPrice}</h2>
        {cart.length ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-primary">Pay</button>
          </Link>
        ) : (
          <button disabled className="btn btn-primary">
            Pay
          </button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table  w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Company name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.company}</td>
                <td>${item.pricePerUnit}</td>
                <td>
                  <div className="flex items-center">
                    <button
                      className="h-7 w-7 bg-gray-300 text-md disabled:bg-gray-100 disabled:cursor-not-allowed"
                      disabled={item.quantity === 1}
                      onClick={() => {
                        handleChange(item._id, item.quantity - 1);
                      }}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      className="text-base text-center w-10 border border-gray-300 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                      value={item.quantity}
                    />
                    <button
                      className="h-7 w-7 bg-gray-300 text-md"
                      disabled={item.quantity === item.stock}
                      onClick={() => {
                        handleChange(item._id, item.quantity + 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
