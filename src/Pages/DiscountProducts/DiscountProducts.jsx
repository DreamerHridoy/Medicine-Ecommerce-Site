import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

const DiscountProducts = ({ medicines }) => {
  // Filter medicines with discounts
  const discountProducts = medicines.filter(
    (item) => item.discountPercentage > 0
  );

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
        modules={[Navigation, Pagination]}
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
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
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
