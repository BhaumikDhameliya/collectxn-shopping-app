import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex justify-center items-center">
      <div className="flex gap-2">
      <Link to='/signup'>Sign up</Link>
      <Link to='/cooming-soon'>Comming soon</Link>
      </div>
    </div>
  );
};

export default Home;
