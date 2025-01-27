import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const CategoryManagement = () => {
  const axiosSecure = useAxiosSecure();
  const { data: categories, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/categories`);
      return res.data;
    }
  });
  console.log(categories);

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-3xl">
          <span>Total Categories : </span>
          {categories?.length}
        </h2>
        <button
          //   onClick={() => handleDeleteUser(user)}
          className="btn btn-neutral text-white btn-md"
        >
          Add Category
          {/* <FaTrashAlt className="text-red-600"></FaTrashAlt> */}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>No of Medicine</th>
              {/* <th>Date</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((category, index) => (
              <tr key={category._id}>
                <th>{index + 1}</th>
                <td>
                  <img src={category?.image} alt="" className="size-10" />
                </td>
                <td>{category.name}</td>
                <td>{category.numberOfMedicines}</td>

                {/* <td>{category.status}</td> */}

                <td className="flex gap-2">
                  <button
                    //   onClick={() => handleDeleteUser(user)}
                    className="btn bg-red-600 text-white btn-md"
                  >
                    Delete
                    {/* <FaTrashAlt className="text-red-600"></FaTrashAlt> */}
                  </button>
                  <button
                    //   onClick={() => handleDeleteUser(user)}
                    className="btn bg-success text-white btn-md"
                  >
                    Update
                    {/* <FaTrashAlt className="text-red-600"></FaTrashAlt> */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryManagement;
