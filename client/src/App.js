import React from "react";
import Login from "./screens/Home";
import Login2 from "./screens/Login2";
import Sidebar from "./components/Sidebar";
import Bookings from "./screens/Bookings";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Cancellation from "./screens/Cancellation";
import ApproverPage from "./screens/ApprovPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoutes/>}>
            <Route path="/" element={<Navigate to="/login" replace={true} />} />
            
            <Route
              path="/home/"
              element={
                <>
                  <Sidebar />
                  <Login />
                </>
              }
            />
            <Route
              path="/Bookings"
              element={
                <>
                  <Sidebar />
                  <Bookings />
                </>
              }
            />
            <Route
              path="/Cancellation"
              element={
                <>
                  <Sidebar />
                  <Cancellation />
                </>
              }
            />
            <Route
              path="/Approver"
              element={
                <>
                  <Sidebar />
                  <ApproverPage />
                </>
              }
            />
          </Route>
          <Route path="login" element={<Login2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
