import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";

const JobListPage = () => {
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobListings = async () => {
      try {
        const response = await fetch(
          `https://localhost:7095/api/JobListing`
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch job listings: ${response.statusText}`
          );
        }
        const data = await response.json();
        setJobListings(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job listings:", error);
        setError("Failed to fetch job listings. Please try again later.");
        setLoading(false);
      }
    };

    fetchJobListings();
  }, []);

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-4 text-red-500">{error}</div>;
  }

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="container mx-12 my-12 px-4 justify-center">
          <section className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h1 className="text-2xl font-semibold mb-4 text-center">
              Job Listings
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {jobListings.map((listing) => (
                <div
                  key={listing.jobListingId}
                  className="border border-gray-200 p-4 rounded-lg shadow-md"
                >
                  <h2 className="font-semibold text-xl mb-2 text-center">
                    {listing.jobTitle}
                  </h2>
                  <p className="text-gray-600 mb-2">
                    <strong>Job Description: </strong>
                    {listing.jobDescription || "N/A"}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Salary: </strong>
                    {listing.salaryRange}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Posted On:</strong>{" "}
                    {new Date(listing.postedDate).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Location:</strong> {listing.location}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default JobListPage;
