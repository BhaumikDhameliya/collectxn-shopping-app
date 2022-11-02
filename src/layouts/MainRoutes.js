import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const MainRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<h1>signin</h1>} />
      </Routes>
    </Fragment>
  );
};

export default MainRoutes;
