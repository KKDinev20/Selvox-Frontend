import { useState, useEffect } from 'react';

export default function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [jobListings, setJobListings] = useState([]);
    const [userPage, setUserPage] = useState(1);
    const [jobListingPage, setJobListingPage] = useState(1);
    const pageSize = 100;

    useEffect(() => {
        fetchUsers();
        fetchJobListings();
    }, [userPage, jobListingPage]);

    const fetchUsers = async () => {
        try {
            const res = await fetch(`https://localhost:7095/api/Admin/users?page=${userPage}&pageSize=${pageSize}`);
            const data = await res.json();
            setUsers(data);
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    };

    const fetchJobListings = async () => {
        try {
            const res = await fetch(`https://localhost:7095/api/Admin/joblistings?page=${jobListingPage}&pageSize=${pageSize}`);
            const data = await res.json();
            setJobListings(data);
        } catch (error) {
            console.error('Failed to fetch job listings:', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await fetch(`https://localhost:7095/api/Admin/users/${id}`, {
                method: 'DELETE',
            });
            fetchUsers(); // Refresh user list
        } catch (error) {
            console.error('Failed to delete user:', error);
        }
    };

    const deleteJobListing = async (id) => {
        try {
            await fetch(`https://localhost:7095/api/Admin/joblistings/${id}`, {
                method: 'DELETE',
            });
            fetchJobListings(); // Refresh job listing
        } catch (error) {
            console.error('Failed to delete job listing:', error);
        }
    };

    return (
        <>
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-5">Admin Dashboard</h1>
            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">Users</h2>
                <table className="min-w-full bg-white border">
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
                    <tbody className='text-center'>
                        {users.map(user => (
                            <tr key={user.userId}>
                                <td className="py-2 px-4 border-b">{user.userId}</td>
                                <td className="py-2 px-4 border-b">{user.firstName}</td>
                                <td className="py-2 px-4 border-b">{user.lastName}</td>
                                <td className="py-2 px-4 border-b">{user.email}</td>
                                <td className="py-2 px-4 border-b">{user.passwordHash}</td>
                                <td className="py-2 px-4 border-b">
                                    <button onClick={() => deleteUser(user.userId)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-between mt-4">
                    <button 
                        onClick={() => setUserPage(prev => Math.max(prev - 1, 1))} 
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                        disabled={userPage === 1}
                    >
                        Previous
                    </button>
                    <button 
                        onClick={() => setUserPage(prev => prev + 1)} 
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                        disabled={users.length < pageSize}
                    >
                        Next
                    </button>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Job Listings</h2>
                <table className="min-w-full bg-white border">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Job ID</th>
                            <th className="py-2 px-4 border-b">Job Title</th>
                            <th className="py-2 px-4 border-b">Employer</th>
                            <th className="py-2 px-4 border-b">Location</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobListings.map(job => (
                            <tr key={job.jobListingId}>
                                <td className="py-2 px-4 border-b">{job.jobListingId}</td>
                                <td className="py-2 px-4 border-b">{job.jobTitle}</td>
                                <td className="py-2 px-4 border-b">{job.employer.companyName}</td>
                                <td className="py-2 px-4 border-b">{job.location}</td>
                                <td className="py-2 px-4 border-b">
                                    <button onClick={() => deleteJobListing(job.jobListingId)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-between mt-4">
                    <button 
                        onClick={() => setJobListingPage(prev => Math.max(prev - 1, 1))} 
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                        disabled={jobListingPage === 1}
                    >
                        Previous
                    </button>
                    <button 
                        onClick={() => setJobListingPage(prev => prev + 1)} 
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                        disabled={jobListings.length < pageSize}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}
