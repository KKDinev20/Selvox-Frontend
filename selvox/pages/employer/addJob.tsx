import { useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./sidebar";

export default function EmployerJobPost() {
  const router = useRouter();
  const [form, setForm] = useState({
    employerId: "", // Assuming employerId is dynamically obtained, e.g., from authentication context
    jobRoleId: "", // Added to match the backend requirement
    jobTitle: "",
    jobDescription: "",
    location: "",
    salaryRange: "",
    expirationDate: "",
  });

  // Placeholder for employerId - replace with actual logic to obtain the employer's ID
  const employerId = 1; // Example value, replace with actual logic

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { ...form, employerId }; // Include employerId in the form data

    const res = await fetch(
      "https://localhost:7095/api/JobListing/PostJobListing",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include", // Ensure cookies are included for authentication/session management
      }
    );

    if (res.ok) {
      alert("Job listing posted successfully");
      router.push("/employer/dashboard"); // Redirect to employer dashboard after successful post
    } else {
      const errorData = await res.json();
      alert(`Error: ${errorData.message}`);
    }
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow ml-4">
          <div className="container mx-40">
            <div className="bg-box text-gray-500 box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; w-2/4 h-2/4 rounded-3xl overflow-hidden my-12 mx-10 md:px-10">
              <div className="md:flex w-full">
                <div className="w-full py-8 px-8 md:px-10">
                  <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-900">
                      Post a Job
                    </h1>
                    <p>Fill out the form to post a new job listing.</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    {/* Job Role ID input */}
                    <div className="mb-4">
                      <label
                        htmlFor="jobRoleId"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Job Role ID
                      </label>
                      <input
                        type="text"
                        id="jobRoleId"
                        name="jobRoleId"
                        value={form.jobRoleId}
                        onChange={handleChange}
                        placeholder="Job Role ID"
                        required
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    {/* Job Title input */}
                    <div className="mb-4">
                      <label
                        htmlFor="jobTitle"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Job Title
                      </label>
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={form.jobTitle}
                        onChange={handleChange}
                        placeholder="Job Title"
                        required
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    {/* Job Description textarea */}
                    <div className="mb-4">
                      <label
                        htmlFor="jobDescription"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Job Description
                      </label>
                      <textarea
                        id="jobDescription"
                        name="jobDescription"
                        value={form.jobDescription}
                        onChange={handleChange}
                        placeholder="Job Description"
                        required
                        rows="4"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      ></textarea>
                    </div>
                    {/* Location input */}
                    <div className="mb-4">
                      <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        placeholder="Location"
                        required
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    {/* Salary Range input */}
                    <div className="mb-4">
                      <label
                        htmlFor="salaryRange"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Salary Range
                      </label>
                      <input
                        type="number"
                        id="salaryRange"
                        name="salaryRange"
                        value={form.salaryRange}
                        onChange={handleChange}
                        placeholder="Salary Range"
                        required
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    {/* Expiration Date input */}
                    <div className="mb-4">
                      <label
                        htmlFor="expirationDate"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Expiration Date
                      </label>
                      <input
                        type="date"
                        id="expirationDate"
                        name="expirationDate"
                        value={form.expirationDate}
                        onChange={handleChange}
                        placeholder="Expiration Date"
                        required
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      className="block w-full mt-10 max-w-xs mx-auto bg-button text-gray-900 hover:bg-navbar focus:bg-navbar rounded-lg px-3 py-3 font-semibold"
                    >
                      Post Job
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
