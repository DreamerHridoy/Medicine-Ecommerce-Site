import React, { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const CategoryMedicine = ({ title, medicines }) => {
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [cart] = useCart();

  const handleAddToCart = (medicine) => {
    const {
      name,
      company,
      pricePerUnit,
      discountPercentage,
      stock,
      image,
      _id
    } = medicine;
    if (user && user.email) {
      const findMedicineInCart = cart.find((item) => item.medicineId === _id);
      console.log("--", findMedicineInCart);
      const cartItem = {
        name,
        email: user.email,
        company,
        pricePerUnit,
        discountPercentage,
        stock,
        image,
        medicineId: _id,
        quantity: 1
      };
      if (findMedicineInCart) {
        axiosSecure
          .patch(`/carts/${findMedicineInCart._id}`, {
            quantity: findMedicineInCart?.quantity
              ? findMedicineInCart?.quantity + 1
              : 1
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} added to your cart`,
                showConfirmButton: false,
                timer: 1500
              });
              refetch();
            }
          });

        return;
      }

      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  const handleViewDetails = (medicine) => {
    setSelectedMedicine(medicine);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Company</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <tr key={medicine.id}>
              <td className="border p-2">{medicine.name}</td>
              <td className="border p-2">{medicine.company}</td>
              <td className="border p-2">${medicine.pricePerUnit}</td>
              <td className="border p-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleViewDetails(medicine)}
                >
                  Eye
                </button>
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded"
                  onClick={() => handleAddToCart(medicine)}
                >
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Medicine Details */}
      {selectedMedicine && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">{selectedMedicine.name}</h3>
            <img
              src={selectedMedicine.image}
              alt={selectedMedicine.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p>
              <strong>Company:</strong> {selectedMedicine.company}
            </p>
            <p>
              <strong>Price:</strong> ${selectedMedicine.pricePerUnit}
            </p>
            <p>
              <strong>Description:</strong> {selectedMedicine.description}
            </p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => setSelectedMedicine(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryMedicine;
