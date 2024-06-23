import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("No user ID found. Please log in.");
        router.push("/general/auth/login");
        return;
      }

      const res = await fetch(`https://localhost:7095/api/User/${userId}`);
      if (res.ok) {
        const userData = await res.json();
        setForm({
          firstName: userData.firstName,
          lastName: userData.lastName,
        });
      } else {
        const errorData = await res.json();
        console.error("Failed to fetch user data:", errorData.message);
        alert("Failed to fetch user data. Please try again.");
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <aside className="flex flex-col sticky top-0 w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l ">
        <a href="/jobseeker/dashboard">
          <img className="w-auto h-auto" src="/SelvoxLogo.png" alt="" />
        </a>

        <div className="flex flex-col justify-between flex-1 mt-6 pt-16">
          <nav className="flex-1 -mx-3 space-y-3 ">
            <a
              className="flex items-center px-3 py-2 text-gray-800 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="/admin/dashboard"
            >
             <img src="/dashboard.svg" className="h-5 w-5"/>

              <span className="mx-2 text-sm font-medium">Dashboard</span>
            </a>

            <a
              className="flex items-center px-3 py-2 text-gray-800 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="/admin/usersData"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                />
              </svg>

              <span className="mx-2 text-sm font-medium">Users</span>
            </a>

            <a
              href="/jobseeker/personalityTest"
              className="flex items-center px-3 py-2 text-gray-800 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <img src="/question.svg" className="h-5 w-5"/>

              <span className="mx-2 text-sm font-medium">Take Test</span>
            </a>


            <a
              href="/jobseeker/userProfile"
              className="flex items-center px-3 py-2 text-gray-800 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>

              <span className="mx-2 text-sm font-medium">Profile</span>
            </a>

            
            <a
              className="flex items-center px-3 py-2 text-gray-800 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="/updateUser/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span className="mx-2 text-sm font-medium">Settings</span>
            </a>
          </nav>

          <div className="mt-6">
            <div className="flex items-center justify-between mt-6">
              <a href="#" className="flex items-center gap-x-2">
                <span
                  className="text-sm font-medium text-gray-700"
                  value={form.firstName}
                >
                  {form.firstName} {form.lastName}
                </span>
              </a>

              <a
                href="/"
                className="text-gray-500 transition-colors duration-200 rotate-180 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </aside>

    </>
  );
}
