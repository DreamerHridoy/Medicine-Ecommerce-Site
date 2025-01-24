import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    }
  });

  const totalPrice = cart.reduce((total, item) => total + item.pricePerUnit, 0);
  const totalItem = cart.reduce((total, item) => total + item.quantity, 0);

  return [cart, refetch, totalPrice, totalItem];
};

export default useCart;
