import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import CategoryList from "../../Category/CategoryList";
import DiscountProducts from "../../DiscountProducts/DiscountProducts";
import Banner from "../Banner/Banner";

const Home = () => {
  const [medicines, setMedicines] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // Fetch medicines for the selected category
    axiosSecure
      .get(`/medicines`)
      .then((res) => setMedicines(res.data))
      .catch((err) => console.error("Error fetching medicines:", err));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <DiscountProducts medicines={medicines} />
      <CategoryList></CategoryList>
    </div>
  );
};

export default Home;
