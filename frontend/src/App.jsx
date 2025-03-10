import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Context from "./context/index.jsx";
import { setUserDetails } from "./store/userSlice.jsx";
import SummaryApi from "./common/index.jsx";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import AdminPanel from "./pages/AdminPanel.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import AllUsers from "./pages/AllUsers.jsx";

function App() {
  const dispatch = useDispatch(); // Declare dispatch

  const fetchUserDetails = async () => {
    try {
      const dataResponse = await fetch(`${SummaryApi.current_user.url}`, {
        method: SummaryApi.current_user.method,
        credentials: "include",
      });
      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        dispatch(setUserDetails(dataApi.data)); // Use dispatch correctly
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  // Fetch user details when component mounts
  useEffect(() => {
    fetchUserDetails();
  }, []);

  const contextValue = {
    fetchUserDetails,
  };

  return (
    <Context.Provider value={contextValue}>
      <ToastContainer />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/admin" element={<AdminPanel />}>
            <Route path="AllUsers" element={<AllUsers />} />
            <Route path="AllProducts" element={<AllProducts />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </Context.Provider>
  );
}

export default App;
