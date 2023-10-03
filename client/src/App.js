import React from "react";
import Login from "./screens/Home";
import Login2 from "./screens/Login2";
import Bookings from "./screens/Bookings";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Cancellation from "./screens/Cancellation";
import ApproverPage from "./screens/ApprovPage";
import Analytics from "./screens/Analytics";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.User);
  const token = useSelector((state) => state.token);
  let routes;
  setTimeout(() => {}, 1000);
  if (token) {
    if (user.role === "admin") {
      routes = (
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Navigate to="/Admin" replace={true} />} />
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
          <Route
            path="/Admin"
            element={
              <>
                <Navbar />
                <Analytics />
              </>
            }
          />
        </Routes>
      );
    } else if (user.role === "requester") {
      routes = (
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Navigate to="/Home" replace={true} />} />
          <Route
            path="/Home"
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
        </Routes>
      );
    } else if (user.role === "approver") {
      routes = (
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route
            path="/"
            element={<Navigate to="/Approver" replace={true} />}
          />
          <Route
            path="/Home"
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
        </Routes>
      );
    }
  } else {
    routes = (
      <Routes>
        <Route path="login" element={<Login2 />} />
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
    );
  }
  return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
