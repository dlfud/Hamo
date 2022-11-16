import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Join from "./routes/Join";
import Login from "./routes/Login";

function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
