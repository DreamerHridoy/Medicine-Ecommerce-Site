import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const InvoicePage = () => {
  const componentRef = useRef();

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  console.log({ user, payments });

  // Function to handle print/download
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Invoice",
  });

  return (
    <div className="p-8 bg-gray-100 min-h-screen" ref={componentRef}>
      {/* Invoice Content */}
      <div className="bg-white shadow-md rounded-md p-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-4">
          <img
            src="your-logo-url.png"
            alt="Website Logo"
            className="w-24 mx-auto"
          />
          <h1 className="text-xl font-bold mt-2">Invoice</h1>
        </div>

        {/* User Information */}
        <div className="mb-6">
          <h2 className="font-semibold text-lg">Customer Information</h2>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
        </div>

        {/* Purchase Information */}
        <div>
          <h2 className="font-semibold text-lg">Purchase Details</h2>
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>price</th>
                <th>Transaction Id</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments?.map((payment, index) => (
                <tr key={payment._id}>
                  <th>{index + 1}</th>
                  <td>${payment.price}</td>
                  <td>{payment.transactionId}</td>
                  <td>{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total */}
        {/* <div className="text-right mt-6">
          <h2 className="font-bold text-lg">
            Grand Total: $
            {purchaseInfo
              .reduce(
                (acc, item) =>
                  acc + item.price * item.quantity * (1 - item.discount / 100),
                0
              )
              .toFixed(2)}
          </h2>
        </div> */}
      </div>

      {/* Print Button */}
      <div className="text-center mt-6">
        <button
          onClick={handlePrint}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Download Invoice
        </button>
      </div>
    </div>
  );
};

export default InvoicePage;
