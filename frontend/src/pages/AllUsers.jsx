import React, { useEffect, useState } from "react";
import SummaryApi from "../common/index.jsx";
import moment from "moment";
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';
import { toast } from 'react-toastify';

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [openUpdateRole, setOpenUpdateRole] = useState(false);
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email: "",
    name: "",
    role: "",
    userId: "",
  });

  const fetchAllUsers = async () => {
    const fetchData = await fetch(SummaryApi.allUser.url, {
      method: SummaryApi.allUser.method,
      credentials: "include",
    });
    const dataResponse = await fetchData.json();

    if (dataResponse.success) {
      setAllUsers(dataResponse.data);
    } else if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div>
      <table className="w-full userTable">
        <thead>
          <tr className="bg-black text-white">
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((el, index) => (
            <tr key={el._id}>
              <td>{index + 1}</td>
              <td>{el?.name}</td>
              <td>{el?.email}</td>
              <td>{el?.role}</td>
              <td>{moment(el?.createdAt).format("LL")}</td>
              <td>
                <button
                  className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white"
                  onClick={() => {
                    setUpdateUserDetails(el);
                    setOpenUpdateRole(true);
                  }}
                >
                  <MdModeEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {openUpdateRole && (
        <ChangeUserRole
          onClose={() => setOpenUpdateRole(false)}
          name={updateUserDetails.name}
          email={updateUserDetails.email}
          role={updateUserDetails.role}
          userId={updateUserDetails._id}
          callFunc={fetchAllUsers}
        />
      )}
    </div>
  );
};

export default AllUsers;
