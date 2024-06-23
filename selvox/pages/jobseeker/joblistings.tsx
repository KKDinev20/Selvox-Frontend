import { useEffect, useState } from 'react';

export default function JobListings() {
    const [jobListings, setJobListings] = useState([]);

    useEffect(() => {
        const fetchJobListings = async () => {
            try {
                const res = await fetch('https://localhost:7095/api/JobListing');
                if (res.ok) {
                    const data = await res.json();
                    setJobListings(data);
                } else {
                    console.error('Failed to fetch job listings');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchJobListings();
    }, []);

    return (
        <>
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-5">Job Listings</h1>
            {jobListings.length === 0 ? (
                <p>No job listings available</p>
            ) : (
                <ul>
                    {jobListings.map((job) => (
                        <li key={job.jobListingId} className="border p-4 mb-4">
                            <h2 className="text-2xl font-bold">{job.jobTitle}</h2>
                            <p>{job.jobDescription}</p>
                            <p><strong>Company:</strong> {job.employer.companyName}</p>
                            <p><strong>Location:</strong> {job.location}</p>
                            <p><strong>Salary Range:</strong> {job.salaryRange}</p>
                            <button className="bg-blue-500 text-white px-4 py-2 mt-4">Apply</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        </>
    );
}
