import React from "react";

const Task02 = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto px-24 py-12 font-poppins">
      <h1 className=" font-acme text-2xl">Task-02</h1>
      <form className="bg-gray-100 rounded px-4 py-8 w-[500px] mx-auto">
        <h1 className=" font-acme text-3xl text-center py-3">
          Add Products Here!
        </h1>
        <div className="flex flex-col justify-center  mx-auto mb-4">
          <label htmlFor="title" className="text-lg">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="border border-gray-200 py-1.5 px-3 rounded focus:outline-cyan-500"
          />
        </div>
        <div className="flex flex-col justify-center mx-auto mb-4">
          <label htmlFor="image" className="text-lg">
            Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="border border-gray-200 py-1.5 px-3 rounded focus:outline-cyan-500"
          />
        </div>
        <div className="flex flex-col justify-center mx-auto mb-4">
          <label htmlFor="description" className="text-lg">
            Description
          </label>
          <textarea
            type="text"
            id="description"
            rows={4}
            name="description"
            className="border border-gray-200 py-1.5 px-3 rounded focus:outline-cyan-500"
          />
        </div>
        <div className="flex flex-col justify-center mx-auto mb-4">
          <label htmlFor="price" className="text-lg">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            className="border border-gray-200 py-1.5 px-3 rounded focus:outline-cyan-500"
          />
        </div>
        <div className="flex flex-col justify-center mx-auto mb-4">
          <label htmlFor="category" className="text-lg">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            className="border border-gray-200 py-1.5 px-3 rounded focus:outline-cyan-500"
          />
        </div>
        <div className="flex flex-col justify-center mx-auto mb-4">
          <button>Add Products</button>
        </div>
      </form>
    </div>
  );
};

export default Task02;
