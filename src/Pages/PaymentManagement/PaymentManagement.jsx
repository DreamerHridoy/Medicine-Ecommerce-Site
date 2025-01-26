import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

const PaymentManagement = () => {
  const axiosSecure = useAxiosSecure();
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments/all");
      return res.data;
    },
  });
  console.log(payments);

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
            {payments?.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.email}</td>
                <td>{payment.price} $</td>
                <td>{payment.transactionId}</td>
                <td>{moment(payment.date).format("DD/MM/YYYY")}</td>
                <td>{payment.status}</td>

                {/* <td>
                       <button
                         onClick={() => handleDeleteUser(user)}
                         className="btn btn-ghost btn-lg"
                       >
                         <FaTrashAlt className="text-red-600"></FaTrashAlt>
                       </button>
                     </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentManagement;
