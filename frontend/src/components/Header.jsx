import React, { useState } from "react";
import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaShoppingCart, FaUser } from "react-icons/fa"; // Added FaUser
import { useSelector, useDispatch } from "react-redux"; // Added useDispatch
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SummaryApi from "../common"; // Added import for API config
import { setUserDetails } from "../store/userSlice.jsx"; // Added import for Redux action

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Added dispatch for Redux
  const user = useSelector((state) => state?.user?.user); // User state from Redux
  const [menuDisplay,setMenuDisplay] = useState(false)

  // console.log("user-header", user);

  const handleLogout = async () => {
    try {
      const fetchData = await fetch(SummaryApi.logout_user.url, {
        method: SummaryApi.logout_user.method,
        credentials: "include", // For cookies/sessions
      });

      const data = await fetchData.json();

      if (data.success) {
        toast.success(data.message);
        dispatch(setUserDetails(null)); // Clear user from Redux
        navigate("/"); // Redirect to home page
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Logout failed: " + error.message);
    }
  };

  return (
    <header className="h-16 shadow-md bg-white">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        {/* Logo */}
        <div>
          <Link to="/">
            <Logo w={90} h={50} />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="Search product here..."
            className="w-full outline-none pl-2"
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>

        {/* Right Section: Cart + Profile Icon + Login/Logout Button */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <div className="text-2xl relative">
            <span>
              <FaShoppingCart />
            </span>
            <div className="bg-red-600 text-white w-5 p-.5 flex items-center justify-center rounded-full absolute -top-2 -right-2">
              <p className="text-xs">0</p>
            </div>
          </div>

          {/* Profile Icon (always visible, separate) */}

          <div 
            className="relative group"
            onClick={() => navigate("/Admin")}>
            <Link to="/profile" className="text-2xl">
              <img // Add User Icon when you delete Img name and replace to {FaUser} Name
                src="phote.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer object-cover"/>
              <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-md p-2 rounded cursor-default text-base whitespace-nowrap w-25">
              AdminPanel
              </div>
              
            </Link>
          </div>

          {/* Login/Logout Button (always visible, separate) */}
          <button
            className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700"
            onClick={user ? handleLogout : () => navigate("/login")} // Logout triggers handleLogout, Login navigates
          >
            {user ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
