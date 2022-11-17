import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import AuthRoutes from "./auth/AuthRoutes";
import Home from "./routes/Home";
import Join from "./routes/Join";
import Login from "./routes/Login";
import UserDetail from "./routes/users/UserDetail";

function App() {
  return (
    <Router>
      <Suspense>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/join" element={<Join />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route element={<AuthRoutes />}>
              <Route path="/users/:id" element={<UserDetail />}></Route>
            </Route>
          </Routes>
        </RecoilRoot>
      </Suspense>
    </Router>
  );
}

export default App;
