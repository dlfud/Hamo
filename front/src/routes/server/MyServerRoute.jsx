import React from "react";
import { Route, Routes } from "react-router-dom";
import MyServer from "./MyServer";

const MyServerRoute = () => {
  return (
    <Routes>
      <Route path="/:id" element={<MyServer />}></Route>
    </Routes>
  );
};

export default MyServerRoute;
