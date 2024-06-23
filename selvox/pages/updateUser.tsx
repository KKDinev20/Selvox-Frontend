import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function UpdateProfile() {
    const router = useRouter();
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        passwordHash: '',
    });

    useEffect(() => {
        const fetchUserData = async () => {
            const userId = localStorage.getItem('userId');
            if (!userId) {
                alert('No user ID found. Please log in.');
                router.push('/general/auth/login');
                return;
            }

            const res = await fetch(`https://localhost:7095/api/User/${userId}`);
            if (res.ok) {
                const userData = await res.json();
                setForm({
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    dateOfBirth: userData.dateOfBirth,
                    gender: userData.gender,
                    passwordHash: '',
                });
            } else {
                const errorData = await res.json();
                console.error('Failed to fetch user data:', errorData.message);
                alert('Failed to fetch user data. Please try again.');
            }
        };

        fetchUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = localStorage.getItem('userId');
        try {
            const res = await fetch(`https://localhost:7095/api/User/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                alert('Profile updated successfully');
                router.push('/');
            } else {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Failed to update profile');
            }
        } catch (error) {
            console.error('Update error:', error);
            alert('Update failed. Please try again.');
        }
    };


    return (
        <div className="flex items-center justify-center">
            <div  className="bg-white text-gray-500 box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
  rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; w-2/4 h-2/4 rounded-3xl overflow-hidden my-12 mx-10 md:px-10">
                <div className="md:flex w-full">
                    <div className="w-full py-8 px-8 md:px-10">
                        <div className="text-center mb-10">
                            <h1 className="font-bold text-3xl text-gray-900">Profile</h1>
                            <p>Update your profile information</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {/* First name input */}
                            <div className="mb-4">
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            {/* Last name input */}
                            <div className="mb-4">
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            {/* Date of Birth input */}
                            <div className="mb-4">
                                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                                <input
                                    type="date"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    value={form.dateOfBirth}
                                    onChange={handleChange}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            {/* Gender input */}
                            <div className="mb-4">
                                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                                <input
                                    type="text"
                                    id="gender"
                                    name="gender"
                                    value={form.gender}
                                    onChange={handleChange}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            {/* Password input */}
                            <div className="mb-4">
                                <label htmlFor="passwordHash" className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="passwordHash"
                                    name="passwordHash"
                                    value={form.passwordHash}
                                    onChange={handleChange}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <button type="submit" className="block w-full mt-10 max-w-xs mx-auto bg-button text-gray-900 hover:bg-navbar focus:bg-navbar rounded-lg px-3 py-3 font-semibold">
                                Update Profile
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
