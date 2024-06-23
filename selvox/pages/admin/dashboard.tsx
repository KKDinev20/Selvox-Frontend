import { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const AdminDashboard = () => {
  const [jobseekerCount, setJobseekerCount] = useState(0);
  const [employerCount, setEmployerCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [jobFieldData, setJobFieldData] = useState({});
  const [recentAccounts, setRecentAccounts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://localhost:7095/api/admin/dashboard-data`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setJobseekerCount(data.jobseekerCount);
        setEmployerCount(data.employerCount);
        setTotalCount(data.totalCount);
        setRecentAccounts(data.recentAccounts);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="flex-grow p-8">Error: {error}</div>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-8 text-center">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Jobseekers</h2>
            <p className="text-2xl">{jobseekerCount}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Employers</h2>
            <p className="text-2xl">{employerCount}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Total Accounts</h2>
            <p className="text-2xl">{totalCount}</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 ">
            Recently Created Accounts
          </h2>
          <table className="min-w-full divide-y divide-gray-200 ">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  First Name
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Name
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created At
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentAccounts.map((account) => (
                <tr key={account.userId} className="even:bg-even">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {account.firstName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {account.lastName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {account.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(account.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
