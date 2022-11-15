import * as React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import CoomingSoon from "./pages/CoomingSoon";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="cooming-soon" element={<CoomingSoon />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
