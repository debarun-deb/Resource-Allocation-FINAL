import React from "react";
import Login from "./screens/Home";
import Login2 from "./screens/Login2";
import Bookings from "./screens/Bookings";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Cancellation from "./screens/Cancellation";
import ApproverPage from "./screens/ApprovPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace={true} />} />
        <Route path="/" element={<ProtectedRoutes />}>
          <Route
            path="/home/"
            element={
              <>
                <Navbar />
                <Login />
              </>
            }
          />
          <Route
            path="/Bookings"
            element={
              <>
                <Navbar />
                <Bookings />
              </>
            }
          />
          <Route
            path="/Cancellation"
            element={
              <>
                <Navbar />
                <Cancellation />
              </>
            }
          />
          <Route
            path="/Approver"
            element={
              <>
                <Navbar />
                <ApproverPage />
              </>
            }
          />
        </Route>
        <Route path="login" element={<Login2 />} />
      </Routes>
    </div>
  );
}

export default App;
