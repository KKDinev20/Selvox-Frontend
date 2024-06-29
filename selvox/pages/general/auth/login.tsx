import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://localhost:7095/api/User/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, passwordHash: password }),
      credentials: "include",
    });

    if (res.ok) {
      const data = await res.json();
      if (data.role === "admin") {
        router.push("/admin/dashboard");
      } else if (data.role === "employer") {
        router.push("/employer/dashboard");
      } else if (data.role === "jobseeker") {
        router.push("/jobseeker/dashboard");
      }
    } else {
      alert("Invalid email or password");
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
              <form onSubmit={handleSubmit}>
                {/* Email input */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                {/* Password input */}
                <div className="mb-4">
                  <label htmlFor="passwordHash" className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    name="passwordHash"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <button type="submit" className="block w-full max-w-xs mx-auto bg-button text-gray-900 hover:bg-navbar focus:bg-navbar rounded-lg px-3 py-3 font-semibold">
                  Log in
                </button>

                <p className="text-sm mt-8 text-center">
                  Don't have an account?{' '}
                  <a href="/general/auth/register" className="text-logo font-semibold hover:underline ml-1">
                    Register here
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
