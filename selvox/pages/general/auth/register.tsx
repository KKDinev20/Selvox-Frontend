import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    passwordHash: "",
    role: "jobseeker", // Default role
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
      const res = await fetch("https://localhost:7095/api/User/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data); // Debugging: check response from backend
        router.push("/general/auth/login"); // Redirect to login page after successful registration
      } else {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to register");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again."); // Basic error handling
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-100 text-gray-500 shadow-xl w-full h-3/4 overflow-hidden">
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-button py-10 px-10">
            <img src="/Register.svg" className="w-100 h-auto" />
          </div>
          <div className="w-full md:w-1/2 py-20 px-20 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">Sign up</h1>
              <p>Start your journey by making a new account</p>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-5">
                    <label className="text-xs font-semibold px-1">
                      First name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 px-3 mb-5">
                    <label className="text-xs font-semibold px-1">
                      Last name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">Email</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-6">
                    <label className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        name="passwordHash"
                        value={form.passwordHash}
                        onChange={handleChange}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label
                      htmlFor="role"
                      className="text-xs font-semibold px-1"
                    >
                      Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="jobseeker">Jobseeker</option>
                      <option value="employer">Employer</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="block w-full max-w-xs mx-auto bg-button text-gray-900 hover:bg-navbar focus:bg-navbar rounded-lg px-3 py-3 font-semibold"
                >
                  Sign up
                </button>

                <p className="text-sm mt-8 text-center">
                  Already have an account?{" "}
                  <a
                    href="/general/auth/login"
                    className="text-logo font-semibold hover:underline ml-1"
                  >
                    Login here
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
