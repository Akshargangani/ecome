import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

const AdminPanel = () => {
  // const user = useSelector((state) => state?.user?.user);

const user = useSelector((state) => state?.user?.user || null); 


  return (
    <div className="min-h-[calc(100vh-120px)] md:flex hidden">
      <aside className="bg-white min-h-full w-full max-w-60">
        <div className="text-5xl cursor-pointer relative flex flex-col justify-center customShadow">
          <div className="h-32  flex flex-col justify-center items-center">
            <div className="text-5xl cursor-pointer relative flex justify-center">
                <img
                  src="phote.jpg"
                  className="w-20 h-20 rounded-full"
                  alt={user?.name}
                />
            </div>
            <p className="capitalize text-lg font-semibold ">
            {user?.name}</p> 
               </div>
            <p className="text-sm text-center">{user?.role}</p>

          </div>

          <div>
            <nav className="grid text-sm p-2">
              <Link to={"AllUsers"} className="px-3 py-1 hover:bg-slate-100" >All user</Link>
              <Link to={"AllProducts"} className="px-3 py-1 hover:bg-slate-100">product</Link>
            </nav>
          </div>
      
      </aside>

      <main className="w-full h-full p-4">
        <Outlet />
        </main>
    </div>
  );
};

export default AdminPanel;
