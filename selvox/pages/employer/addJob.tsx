import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AddJob() {
    const router = useRouter();
    const [form, setForm] = useState({
        jobTitle: '',
        jobDescription: '',
        location: '',
        salaryRange: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('https://localhost:7095/api/JobListing', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                const data = await res.json();
                console.log(data); // Debugging: check response from backend
                router.push('/employer/jobListings'); // Redirect to job listings page after successful addition
            } else {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Failed to add job listing');
            }
        } catch (error) {
            console.error('Add job error:', error);
            alert('Failed to add job listing. Please try again.'); // Basic error handling
        }
    };

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-5">Add Job Listing</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title</label>
                    <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={form.jobTitle}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700">Job Description</label>
                    <textarea
                        id="jobDescription"
                        name="jobDescription"
                        value={form.jobDescription}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="salaryRange" className="block text-sm font-medium text-gray-700">Salary Range</label>
                    <input
                        type="text"
                        id="salaryRange"
                        name="salaryRange"
                        value={form.salaryRange}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm">
                    Add Job Listing
                </button>
            </form>
        </div>
    );
}
