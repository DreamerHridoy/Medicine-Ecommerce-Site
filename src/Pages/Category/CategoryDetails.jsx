import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import CategoryMedicine from "../Shared/CategoryMedicine";

const CategoryDetails = () => {
  const { categoryName } = useParams();
  const [medicines, setMedicines] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // Fetch medicines for the selected category
    axiosSecure
      .get(`/medicines?categoryName=${categoryName}`)
      .then((res) => setMedicines(res.data))
      .catch((err) => console.error("Error fetching medicines:", err));
  }, [categoryName]);

  return (
    <CategoryMedicine title="Medicines in category" medicines={medicines} />
  );
};

export default CategoryDetails;
