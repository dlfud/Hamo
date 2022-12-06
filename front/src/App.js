import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoutes from "./auth/AuthRoutes";
import JwtAuthenticatedUser from "./routes/JwtAuthenticatedUser";
import Home from "./routes/Home";
import Join from "./routes/Join";
import Login from "./routes/Login";
import Users from "./routes/users/Users";
import MyServerRoute from "./routes/server/MyServerRoute";
import Create from "./routes/server/Create";

function App() {
  return (
    <Router>
      <Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route element={<AuthRoutes />}>
            <Route
              path="/jwtAuthenticatedUser"
              element={<JwtAuthenticatedUser />}
            />
            <Route path="/users/*" element={<Users />} />
            <Route path="/myServerRoute/*" element={<MyServerRoute />} />
            <Route path="/server" element={<Create />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
