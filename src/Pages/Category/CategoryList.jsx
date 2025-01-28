import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    // Fetch categories from API
    axiosSecure
      .get("/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  const handleCategoryClick = (categoryName) => {
    navigate(`/categories/${categoryName}`);
  };

  return (
    <div>
      <h2 className="text-center text-3xl">All Categories</h2>
      <div className="category-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {categories.map((category) => (
          <CategoryCard
            key={category._id}
            category={category}
            onClick={handleCategoryClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
