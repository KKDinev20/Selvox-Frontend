import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Sidebar from "./sidebar";

export default function UserProfile() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    passwordHash: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("No user ID found. Please log in.");
        router.push("/general/auth/login");
        return;
      }

      const res = await fetch(`https://localhost:7095/api/User/${userId}`);
      if (res.ok) {
        const userData = await res.json();
        setForm({
          firstName: userData.firstName,
          email: userData.email,
          lastName: userData.lastName,
          dateOfBirth: userData.dateOfBirth,
          gender: userData.gender,
          passwordHash: "",
        });
      } else {
        const errorData = await res.json();
        console.error("Failed to fetch user data:", errorData.message);
        alert("Failed to fetch user data. Please try again.");
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="flex justify-center items-center grid grid-cols-3">
      <Sidebar />
      <div className="flex items-center justify-between">
        <div
          className="bg-white text-gray-500 box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
  rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; w-5/6 h-1/2 rounded-3xl overflow-hidden my-12 mx-10 md:px-10"
        >
          <div className="md:flex w-full">
            <div className="w-full py-16 px-10 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">Profile</h1>
                <p>User</p>
              </div>
              <form>
                {/* First name input */}
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={form.firstName}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                {/* Last name input */}
                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={form.lastName}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                {/* Date of Birth input */}
                <div className="mb-4">
                  <label
                    htmlFor="dateOfBirth"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Birth Date
                  </label>
                  <input
                    name="dateOfBirth"
                    value={form.dateOfBirth}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                {/* Gender input */}
                <div className="mb-4">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Gender
                  </label>
                  <input
                    type="text"
                    id="gender"
                    name="gender"
                    value={form.gender}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
