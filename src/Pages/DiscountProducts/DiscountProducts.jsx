import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const DiscountProducts = ({ medicines }) => {
  // Filter medicines with discounts
  const discountProducts = medicines.filter(
    (item) => item.discountPercentage > 0
  );

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [cart, refetch] = useCart();

  const handleAddToCart = (medicine) => {
    const {
      name,
      company,
      pricePerUnit,
      discountPercentage,
      stock,
      image,
      _id,
      sellerEmail
    } = medicine;
    if (user && user.email) {
      const findMedicineInCart = cart.find((item) => item.medicineId === _id);
      // console.log("--", findMedicineInCart);
      const cartItem = {
        name,
        email: user.email,
        company,
        pricePerUnit,
        discountPercentage,
        stock,
        image,
        sellerEmail,
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

  return (
    <div className="my-10 px-5">
      <h2 className="text-2xl font-semibold text-center mb-5">
        Discount Products
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        modules={[]}
        className="discount-slider"
      >
        {discountProducts.map((product) => (
          <SwiperSlide key={product._id}>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-3 text-lg font-medium">{product.name}</h3>
              <p className="text-gray-500">{product.genericName}</p>
              <p className="mt-1 text-green-500 font-semibold">
                {product.pricePerUnit} USD (Save {product.discountPercentage}%)
              </p>
              <p className="text-gray-500 line-through">
                {(
                  product.pricePerUnit /
                  (1 - product.discountPercentage / 100)
                ).toFixed(2)}{" "}
                USD
              </p>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DiscountProducts;
