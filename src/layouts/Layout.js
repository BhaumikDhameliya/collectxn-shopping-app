import React from "react";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import MainRoutes from "./MainRoutes";

const Layout = () => {
  return (
    <Fragment>
      {/* Toast Container */}
      <ToastContainer />
      {/* Header */}
      <MainRoutes />
      {/* Footer */}
    </Fragment>
  );
};

export default React.memo(Layout);
