import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import useAuth from "../../hooks/useAuth";

const PaymentManagementSales = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payments-seller"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/seller/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">Total Payments: {payments?.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Price</th>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment, index) => {
              return (
                <tr key={payment._id}>
                  <th>{index + 1}</th>
                  <td>{payment.email}</td>
                  <td>{payment.price} $</td>
                  <td>{payment.transactionId}</td>
                  <td>{moment(payment.date).format("DD/MM/YYYY")}</td>
                  <td>{payment.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentManagementSales;
