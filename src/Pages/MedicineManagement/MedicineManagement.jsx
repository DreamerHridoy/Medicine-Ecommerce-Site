/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaUtensils } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const MedicineManagement = () => {
  const { user } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [addMedicineModal, setAddMedicineModal] = useState(false);
  const { data: medicines } = useQuery({
    queryKey: ["medicines"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/medicines`);
      return res.data;
    },
  });
  const onSubmit = async (data) => {
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const medicineData = {
        name: data.name,
        genericName: data.genericName,
        category: data.category,
        company: data.company,
        description: data.description,
        massUnit: data.massUnit,
        pricePerUnit: parseFloat(data.pricePerUnit),
        discountPercentage: parseInt(data.discountPercentage),
        image: res.data.data.display_url,
        sellerEmail: user.email,
        stock: data.stock,
      };

      const medicineResponse = await axiosSecure.post(
        "/medicines",
        medicineData
      );

      if (medicineResponse.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added.`,
          showConfirmButton: false,
          timer: 1500,
        });
        setAddMedicineModal(false);
      }
    }
  };
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-3xl">
          <span>Total Medicine : </span>
          {medicines?.length}
        </h2>
        <button
          onClick={() => setAddMedicineModal(true)}
          className="btn btn-neutral text-white btn-md"
        >
          Add Medicine
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
              <th>Mass Unit</th>
              <th>Generic Name</th>
              <th>Company</th>
              <th>Price</th>
              <th>Discount</th>
              <th>In Stock</th>
              {/* <th>Date</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {medicines?.map((medicine, index) => (
              <tr key={medicine._id}>
                <th>{index + 1}</th>
                <td>
                  <img src={medicine?.image} alt="" className="size-10" />
                </td>
                <td className="font-semibold">{medicine.name}</td>
                <td>{medicine.massUnit}</td>
                <td>{medicine.genericName}</td>
                <td>{medicine.company}</td>
                <td className="text-center">{medicine.pricePerUnit}$</td>
                <td className="text-center">{medicine.discountPercentage}%</td>
                <td className="text-center">{medicine.stock}</td>

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
      {addMedicineModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white border-black border-2 w-7/12 px-10 py-5 rounded-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-6">
                <div className="form-control w-full my-3">
                  <label className="label">
                    <span className="label-text">Item Name*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Item Name"
                    {...register("name", { required: true })}
                    required
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full my-3">
                  <label className="label">
                    <span className="label-text">Item Generic Name*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Item Generic Name"
                    {...register("genericName", { required: true })}
                    required
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="form-control w-full my-3">
                <label className="label">
                  <span className="label-text">Description*</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Description"
                  {...register("description", { required: true })}
                  required
                  className="textarea textarea-bordered h-24"
                />
              </div>
              <div className="flex gap-6">
                {/* category */}
                <div className="form-control w-full my-3">
                  <label className="label">
                    <span className="label-text">Category*</span>
                  </label>
                  <select
                    defaultValue="default"
                    {...register("category", { required: true })}
                    className="select select-bordered w-full"
                  >
                    <option disabled value="default">
                      Select a category
                    </option>
                    <option value="Injections">Injections</option>
                    <option value="Syrups">Syrups</option>
                    <option value="Ointments">Ointments</option>
                    <option value="Capsules">Capsules</option>
                    <option value="Tablets">Tablets</option>
                    <option value="Other Categories">Other Categories</option>
                  </select>
                </div>
                <div className="form-control w-full my-3">
                  <label className="label">
                    <span className="label-text">Company*</span>
                  </label>
                  <select
                    defaultValue="default"
                    {...register("company", { required: true })}
                    className="select select-bordered w-full"
                  >
                    <option disabled value="default">
                      Select a company
                    </option>
                    <option value="Wellness Inc">Wellness Inc</option>
                    <option value="HealthCare Labs">HealthCare Labs</option>
                    <option value="ABC Pharmaceuticals">
                      ABC Pharmaceuticals
                    </option>
                    <option value="XYZ Pharma">XYZ Pharma</option>
                    <option value="DiabetesCare">DiabetesCare</option>
                    <option value="DigestiveCare">DigestiveCare</option>
                    <option value="LifeBoost">LifeBoost</option>
                    <option value="Care Remedies">Care Remedies</option>
                    <option value="AllergyCare">AllergyCare</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="form-control w-full my-3">
                  <label className="label">
                    <span className="label-text">Item Mass Unit*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Mass"
                    {...register("massUnit", { required: true })}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full my-3">
                  <label className="label">
                    <span className="label-text">Stock*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="In Stock"
                    {...register("stock", { required: true })}
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="flex gap-6">
                <div className="form-control w-full my-3">
                  <label className="label">
                    <span className="label-text">Price Per Unit*</span>
                  </label>
                  <input
                    type="number"
                    min={0}
                    placeholder="Price"
                    {...register("pricePerUnit", { required: true })}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full my-3">
                  <label className="label">
                    <span className="label-text">Discount*</span>
                  </label>
                  <input
                    type="number"
                    defaultValue={0}
                    min={0}
                    placeholder="Discount Percentage"
                    {...register("discountPercentage", { required: true })}
                    className="input input-bordered w-full"
                  />
                </div>
              </div>

              <div className="form-control w-full my-3">
                <input
                  {...register("image", { required: true })}
                  type="file"
                  className="file-input w-full max-w-xs"
                />
              </div>

              <div className="flex gap-3 justify-end">
                <button type="submit" className="btn btn-success">
                  Add Medicine
                </button>
                <button
                  className="btn btn-error bg-red-600"
                  onClick={() => setAddMedicineModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicineManagement;
