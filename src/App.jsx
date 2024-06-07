import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Task01 from "./components/Task01/Task01";
import Task02 from "./components/Task02/Task02";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task01" element={<Task01 />} />
          <Route path="/task02" element={<Task02 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
