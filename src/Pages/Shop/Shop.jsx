import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import CategoryMedicine from "../Shared/CategoryMedicine";

const Shop = () => {
  const [medicines, setMedicines] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // Fetch medicines
    axiosSecure
      .get(`/medicines`)
      .then((res) => setMedicines(res.data))
      .catch((err) => console.error("Error fetching medicines:", err));
  }, []);

  return <CategoryMedicine title="Shop" medicines={medicines} />;
};

export default Shop;
