import React, { useState } from "react";

const Task03 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const codeString = `
    import axios from "axios";
    import React from "react";
    import { useForm } from "react-hook-form";

    const Task02 = () => {
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = async (data) => {
        await axios
          .post("https://fakestoreapi.com/products", data)
          .then((response) => {
            console.log("Product created successfully");
          })
          .catch((error) => {
            console.log(error.message);
          });
        console.log(data);
      };
      return (
        <div className=" max-w-screen-2xl mx-auto px-24 py-12 font-poppins">
          <h1 className=" font-acme text-2xl">Task-02</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-100 rounded px-6 py-8 w-[600px] mx-auto"
          >
            <h1 className=" font-acme text-3xl text-center py-3">
              Add Products Here!
            </h1>
            <div className="flex flex-col justify-center  mx-auto mb-4">
              <label htmlFor="title" className="text-lg text-gray-600">
                Title
              </label>
              <input
                {...register("title", { required: "Product title is required" })}
                type="text"
                id="title"
                name="title"
                className="border border-cyan-300 bg-gray-50 py-1.5 px-3 rounded focus:outline-cyan-500"
              />
              {errors.title && (
                <p className="text-red-500 py-2">{errors.title?.message}</p>
              )}
            </div>
            <div className="flex flex-col justify-center mx-auto mb-4">
              <label htmlFor="image" className="text-lg text-gray-600">
                Image
              </label>
              <input
                {...register("image", {
                  required: "Product image url is required",
                })}
                type="text"
                id="image"
                name="image"
                className="border border-cyan-300 bg-gray-50 py-1.5 px-3 rounded focus:outline-cyan-500"
              />
              {errors.image && (
                <p className="text-red-500 py-2">{errors.image?.message}</p>
              )}
            </div>
            <div className="flex flex-col justify-center mx-auto mb-4">
              <label htmlFor="description" className="text-lg text-gray-600">
                Description
              </label>
              <textarea
                {...register("description", {
                  required: "Product description is required",
                })}
                type="text"
                id="description"
                rows={4}
                name="description"
                className="border border-cyan-300 bg-gray-50 py-1.5 px-3 rounded focus:outline-cyan-500"
              />
              {errors.description && (
                <p className="text-red-500 py-2">{errors.description?.message}</p>
              )}
            </div>
            <div className="flex flex-col justify-center mx-auto mb-4">
              <label htmlFor="price" className="text-lg text-gray-600">
                Price
              </label>
              <input
                {...register("price", {
                  required: "Product price is required",
                })}
                type="text"
                id="price"
                name="price"
                className="border border-cyan-300 bg-gray-50 py-1.5 px-3 rounded focus:outline-cyan-500"
              />
              {errors.price && (
                <p className="text-red-500 py-2">{errors.price?.message}</p>
              )}
            </div>
            <div className="flex flex-col justify-center mx-auto mb-4">
              <label htmlFor="category" className="text-lg text-gray-600">
                Category
              </label>
              <input
                {...register("category", {
                  required: "Product category is required",
                })}
                type="text"
                id="category"
                name="category"
                className="border border-cyan-300 bg-gray-50 py-1.5 px-3 rounded focus:outline-cyan-500"
              />
              {errors.category && (
                <p className="text-red-500 py-2">{errors.category?.message}</p>
              )}
            </div>
            <div className="flex flex-col justify-center mx-auto mb-4 py-4">
              <button className="py-1.5 px-3 bg-cyan-500 rounded text-white">
                Add Products
              </button>
            </div>
          </form>
        </div>
      );
    };

    export default Task02;

  `;
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className=" max-w-screen-2xl mx-auto px-24 py-12 font-poppins">
      <h1 className=" font-acme text-2xl">Task-03</h1>
      <div className="flex flex-col items-center justify-center">
        <h1 className=" font-acme text-2xl text-center py-3">
          React Form with Validation Code
        </h1>
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-indigo-500 text-white rounded my-4"
        >
          {isVisible ? <>Hide Code</> : <>Display Code</>}
        </button>
        {isVisible && (
          <div className="bg-gray-200 w-[850px] rounded-md">
            <pre>
              <code className="text-base font-poppins">{codeString} </code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task03;
