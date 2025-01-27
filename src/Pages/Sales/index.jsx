import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const SalesManagement = () => {
  const axiosSecure = useAxiosSecure();
  const { data: sales, refetch } = useQuery({
    queryKey: ["sales"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/sales-report`);
      return res.data;
    }
  });

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-3xl">
          <span>Sales report</span>
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Medicine name</th>
              <th>Seller email</th>
              <th>Buyer email</th>
              <th>Total price</th>
            </tr>
          </thead>
          <tbody>
            {sales?.map((item, index) => {
              const medicine = item.details.find(
                (el) => el.email === item.email
              );

              const totalPrice = item.details.reduce(
                (acc, _item) => acc + _item.pricePerUnit,
                0
              );

              return (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{medicine?.name}</td>
                  <td>{medicine?.sellerEmail}</td>
                  <td>{item.email}</td>
                  <td>{totalPrice}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesManagement;
