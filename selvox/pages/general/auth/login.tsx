import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:7095/api/User/Login",
        {
          email,
          passwordHash: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { userId, role } = response.data;

      // Store session token in a cookie
      Cookies.set("userId", userId, { expires: 1 }); // Expires in 1 day
      Cookies.set("userRole", role, { expires: 1 }); // Expires in 1 day

      // Redirect based on role
      if (role === "admin") {
        router.push("/admin/dashboard");
      } else if (role === "employer") {
        router.push("/employer/dashboard");
      } else if (role === "jobseeker") {
        router.push("/jobseeker/dashboard");
      } else {
        setError("Unknown user role");
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-100 text-gray-500 shadow-xl w-full overflow-hidden">
        <div className="md:flex w-full h-screen">
          <div className="hidden md:block w-1/2 bg-button py-10 px-10">
            <img src="/Login.png" className="w-full h-auto" alt="Login" />
          </div>
          <div className="w-full md:w-1/2 md:px-10 py-40 px-16">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">Log in</h1>
              <p>Access your account</p>
            </div>
            <div>
              <form onSubmit={handleLogin}>
                {/* Email input */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                    required
                  />
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="block w-1/3 max-w-xs mx-auto bg-button text-gray-900 hover:bg-navbar focus:bg-navbar rounded-lg px-3 py-3 font-semibold"
                >
                  Log in
                </button>
                {/* Error message */}
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </form>
              {/* Registration link */}
              <p className="mt-4 text-center text-sm">
                Don't have an account?{" "}
                <a
                  href="/general/auth/register"
                  className="font-medium text-navbar"
                >
                  Register here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
