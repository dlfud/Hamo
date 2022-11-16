import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
