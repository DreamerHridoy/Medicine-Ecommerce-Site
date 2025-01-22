import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryDetails = () => {
  const { categoryId } = useParams();
  const [medicines, setMedicines] = useState([]);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch medicines for the selected category
    fetch(`/api/medicines?categoryId=${categoryId}`)
      .then((res) => res.json())
      .then((data) => setMedicines(data))
      .catch((err) => console.error("Error fetching medicines:", err));
  }, [categoryId]);

  const handleSelect = (medicine) => {
    setCart((prevCart) => [...prevCart, medicine]);
    alert(`${medicine.name} has been added to the cart.`);
  };

  const handleViewDetails = (medicine) => {
    setSelectedMedicine(medicine);
  };

  return (
    <div className="category-details p-6">
      <h2 className="text-2xl font-bold mb-4">Medicines in Category</h2>
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
              <td className="border p-2">${medicine.price}</td>
              <td className="border p-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleViewDetails(medicine)}
                >
                  Eye
                </button>
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded"
                  onClick={() => handleSelect(medicine)}
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
              <strong>Price:</strong> ${selectedMedicine.price}
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

export default CategoryDetails;
