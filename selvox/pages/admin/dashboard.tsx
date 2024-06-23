import { useState, useEffect } from 'react';

export default function AdminDashboard() {
    const [usersData, setUsersData] = useState([]);
    const [jobListingsData, setJobListingsData] = useState([]);
    const [usersPage, setUsersPage] = useState(1);
    const [jobsPage, setJobsPage] = useState(1);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalJobListings, setTotalJobListings] = useState(0);
    const pageSize = 100;

    useEffect(() => {
        async function fetchData() {
            try {
                const usersDataRes = await fetch(`/api/Admin/users?page=${usersPage}&pageSize=${pageSize}`);
                const usersDataJson = await usersDataRes.json();
                setUsersData(usersDataJson.Users);
                setTotalUsers(usersDataJson.TotalUsers);

                const jobListingsDataRes = await fetch(`/api/Admin/joblistings?page=${jobsPage}&pageSize=${pageSize}`);
                const jobListingsDataJson = await jobListingsDataRes.json();
                setJobListingsData(jobListingsDataJson.JobListings);
                setTotalJobListings(jobListingsDataJson.TotalJobListings);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [usersPage, jobsPage]);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div>
                <h2>Users</h2>
                <p>Total Users: {totalUsers}</p>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.map(user => (
                            <tr key={user.UserId}>
                                <td>{user.FirstName}</td>
                                <td>{user.LastName}</td>
                                <td>{user.Email}</td>
                                <td>{user.Role}</td>
                                <td>{user.DateOfBirth}</td>
                                <td>{user.Gender}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={() => setUsersPage(usersPage - 1)} disabled={usersPage === 1}>
                    Previous
                </button>
                <button onClick={() => setUsersPage(usersPage + 1)} disabled={usersPage * pageSize >= totalUsers}>
                    Next
                </button>
            </div>
            <div>
                <h2>Job Listings</h2>
                <p>Total Job Listings: {totalJobListings}</p>
                <table>
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Employer</th>
                            <th>Location</th>
                            <th>Salary Range</th>
                            <th>Posted Date</th>
                            <th>Expiration Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobListingsData.map(job => (
                            <tr key={job.JobListingId}>
                                <td>{job.JobTitle}</td>
                                <td>{job.Employer.CompanyName}</td>
                                <td>{job.Location}</td>
                                <td>{job.SalaryRange}</td>
                                <td>{job.PostedDate}</td>
                                <td>{job.ExpirationDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={() => setJobsPage(jobsPage - 1)} disabled={jobsPage === 1}>
                    Previous
                </button>
                <button onClick={() => setJobsPage(jobsPage + 1)} disabled={jobsPage * pageSize >= totalJobListings}>
                    Next
                </button>
            </div>
        </div>
    );
}
