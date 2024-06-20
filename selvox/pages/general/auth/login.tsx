// pages/login.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();
    const [form, setForm] = useState({ email: '', passwordHash: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('https://localhost:7095/api/User/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                const data = await res.json();
                console.log(data); // Debugging: check response from backend

                // Save token and user role in local storage (or any other state management)
                localStorage.setItem('token', data.token);
                localStorage.setItem('role', data.role);

                // Redirect based on role
                switch (data.role) {
                    case 'admin':
                        router.push('/admin/dashboard');
                        break;
                    case 'employer':
                        router.push('/employer/dashboard');
                        break;
                    case 'jobseeker':
                        router.push('/jobseeker/dashboard');
                        break;
                    default:
                        router.push('/');
                }
            } else {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Failed to login');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="bg-gray-100 text-gray-500 shadow-xl w-full h-3/4 overflow-hidden">
                <div className="md:flex w-full">
                    <div className="hidden md:block w-1/2 bg-button py-10 px-10">
                        <img src="/Login.svg" className="w-100 h-auto" />
                    </div>
                    <div className="w-full md:w-1/2 py-16 px-10 md:px-10">
                        <div className="text-center mb-10">
                            <h1 className="font-bold text-3xl text-gray-900">Login</h1>
                            <p>Enter your credentials to access your account</p>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="passwordHash" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="passwordHash"
                                        value={form.passwordHash}
                                        onChange={handleChange}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <button type="submit" className="block w-full max-w-xs mx-auto bg-button text-gray-900 hover:bg-navbar focus:bg-navbar rounded-lg px-3 py-3 font-semibold">
                                    Login
                                </button>
                                <p className="text-sm mt-8 text-center">
                                    Don't have an account?{' '}
                                    <a href="/register" className="text-logo font-semibold hover:underline ml-1">
                                        Sign up here
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
