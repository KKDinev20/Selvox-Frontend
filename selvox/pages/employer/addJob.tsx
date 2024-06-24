import React, { useState } from "react";
import Sidebar from "./sidebar";

const PostJobOffer = () => {
  const [jobOffer, setJobOffer] = useState({
    employerId: "",
    jobRoleId: "",
    jobTitle: "",
    jobDescription: "",
    location: "",
    salaryRange: "",
    postedDate: "",
    expirationDate: "",
  });

  const handleChange = (e) => {
    setJobOffer({ ...jobOffer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/joboffers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobOffer),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success or error
        console.log(data);
      });
  };

  return (
    <>
    <div className="flex">
    <Sidebar/>
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-2xl m-3">
      <h2 className="bg-navbar text-white py-2 px-6 font-bold uppercase">
        Post a Job Offer
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="employerId"
          placeholder="Employer ID"
          value={jobOffer.employerId}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="jobRoleId"
          placeholder="Job Role ID"
          value={jobOffer.jobRoleId}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={jobOffer.jobTitle}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <textarea
          name="jobDescription"
          placeholder="Job Description"
          value={jobOffer.jobDescription}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-20 resize-none overflow-auto"
        ></textarea>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={jobOffer.location}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="number"
          name="salaryRange"
          placeholder="Salary Range"
          value={jobOffer.salaryRange}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="date"
          name="postedDate"
          placeholder="Posted Date"
          value={jobOffer.postedDate}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="date"
          name="expirationDate"
          placeholder="Expiration Date"
          value={jobOffer.expirationDate}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="w-full py-2 bg-navbar text-white font-bold rounded"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
    </>
  );
};

export default PostJobOffer;
