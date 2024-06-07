import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center py-10 text-cyan-500">
      <h1 className=" font-acme text-2xl">React Frontend Tasks</h1>
      <div className="grid grid-cols-4 gap-6 justify-center items-center py-12 font-poppins">
        <div className="text-xl p-4">
          <Link to="/task01">Task01 - Fetch Products Details</Link>
        </div>
        <div className="text-xl p-4">
          <Link to="/task02">Task02 - Create Product Form</Link>
        </div>
        <div className="text-xl p-4">
          <Link to="/task03">Task02 - Show/Hide Content</Link>
        </div>
        <div className="text-xl p-4">Task04</div>
        <div className="text-xl p-4">Task05</div>
        <div className="text-xl p-4">Task06</div>
        <div className="text-xl p-4">Task06</div>
        <div className="text-xl p-4">Task07</div>
        <div className="text-xl p-4">Task08</div>
        <div className="text-xl p-4">Task09</div>
        <div className="text-xl p-4">Task10</div>
        <div className="text-xl p-4">Task11</div>
      </div>
    </div>
  );
};

export default Home;
