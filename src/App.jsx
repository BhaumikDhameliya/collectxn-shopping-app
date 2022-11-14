import * as React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Singup from "./pages/Singup";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="singup" element={<Singup />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
