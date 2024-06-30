import { useState, useEffect } from "react";
import Sidebar from "./sidebar";

export default function UsersData() {
  const [users, setUsers] = useState([]);
  const [jobListings, setJobListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const pageSize = 100;

  useEffect(() => {
    fetchUsers(currentPage, pageSize);
    fetchJobListings(currentPage, pageSize);
  }, [currentPage]);

  const fetchUsers = async (page, pageSize) => {
    try {
      const res = await fetch(
        `https://localhost:7095/api/User?page=${page}&pageSize=${pageSize}`
      );
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  const fetchJobListings = async (page, pageSize) => {
    try {
      const res = await fetch(
        `https://localhost:7095/api/Admin/joblistings?page=${page}&pageSize=${pageSize}`
      );
      const data = await res.json();
      setJobListings(data);
    } catch (error) {
      console.error("Failed to fetch job listings:", error);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const deleteUser = async (id) => {
    try {
      await fetch(`https://localhost:7095/api/User/${id}`, {
        method: "DELETE",
      });
      fetchUsers();
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-2/3  mt-10 mx-20">
          <h1 className="text-3xl font-bold mb-5 text-center">Users</h1>
          <div className="mb-10">
            <table className="min-w-full bg-white border rounded-3xl shadow-md">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">User ID</th>
                  <th className="py-2 px-4 border-b">First Name</th>
                  <th className="py-2 px-4 border-b">Last Name</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Password</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {currentUsers.map((user) => (
                  <tr key={user.userId} className="even:bg-even">
                    <td className="py-2 px-4 border-b">{user.userId}</td>
                    <td className="py-2 px-4 border-b">{user.firstName}</td>
                    <td className="py-2 px-4 border-b">{user.lastName}</td>
                    <td className="py-2 px-4 border-b">{user.email}</td>
                    <td className="py-2 px-4 border-b">{user.passwordHash}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => deleteUser(user.userId)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                className="bg-navbar text-white px-4 py-2 rounded"
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span>
                <button
                  onClick={() => handlePageChange(currentPage)}
                  className="cursor-pointer"
                >
                  {`${currentPage} / ${totalPages}`}
                </button>
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="bg-navbar text-white px-4 py-2 rounded"
                disabled={currentPage >= totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
