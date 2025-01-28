/* eslint-disable react/prop-types */
import React from "react";

const CategoryCard = ({ category, onClick }) => {
  return (
    <div
      className="category-card border rounded-lg p-4 shadow-md hover:shadow-lg cursor-pointer"
      // onClick={() => onClick(category._id)}
      onClick={() => onClick(category.name)}
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-xl font-semibold mt-3">{category.name}</h3>
      <p className="text-gray-600">Medicines: {category.medicineCount}</p>
    </div>
  );
};

export default CategoryCard;
