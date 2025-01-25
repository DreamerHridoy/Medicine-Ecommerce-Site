import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const InvoicePage = ({ userInfo, purchaseInfo }) => {
  const componentRef = useRef();

  // Function to handle print/download
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Invoice",
  });

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Invoice Content */}
      <div
        ref={componentRef}
        className="bg-white shadow-md rounded-md p-6 max-w-4xl mx-auto"
      >
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
          <p>Name: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
          <p>Address: {userInfo.address}</p>
        </div>

        {/* Purchase Information */}
        <div>
          <h2 className="font-semibold text-lg">Purchase Details</h2>
          <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Item</th>
                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Discount</th>
                <th className="border border-gray-300 px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {purchaseInfo.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.quantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${item.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.discount}%
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    $
                    {(
                      item.price *
                      item.quantity *
                      (1 - item.discount / 100)
                    ).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total */}
        <div className="text-right mt-6">
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
        </div>
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
