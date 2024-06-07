import axios from "axios";
import React, { useEffect, useState } from "react";

const Task01 = () => {
  const [products, setProducts] = useState([]);

  const fetchProductsApi = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProductsApi();
  }, []);

  return (
    <div className=" max-w-screen-2xl mx-auto px-24 py-12 font-poppins">
      <h1 className=" font-acme text-2xl">Task-01</h1>
      <div className="w-full overflow-x-auto">
        <table
          className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200 my-12"
          cellSpacing="0"
        >
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-md font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                No
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Image
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Title
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Price
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Category
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Description
              </th>
            </tr>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td className="h-12 px-6 py-3 text-md transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {index + 1}
                </td>
                <td className="h-12 px-6 py-3 text-md transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  <img src={product.image} alt={product.title} />
                </td>
                <td className="h-12 px-6 py-3 text-md transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {product.title}
                </td>
                <td className="h-12 px-6 py-3 text-md transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  $.{product.price}
                </td>
                <td className="h-12 px-6 py-3 text-md transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {product.description}
                </td>
                <td className="h-12 px-6 py-3 text-md transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {product.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Task01;
