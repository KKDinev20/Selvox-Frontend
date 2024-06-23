export default function Home() {
  return (
    <>
      <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l ">
        <a href="#">
          <img className="w-auto h-auto" src="/SelvoxLogo.png" alt="" />
        </a>

        <div className="flex flex-col justify-between flex-1 mt-6 pt-16">
          <nav className="flex-1 -mx-3 space-y-3 ">

          <a
              className="flex text-lg items-center px-3 py-2 text-gray-800 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="/admin/dashboard"
            >
              <img src="/dashboard.svg" className="h-7 w-7"/>

              <span className="mx-2 text-sm font-medium">Dashboard</span>
            </a>

            <a
              className="flex items-center px-3 py-2 text-gray-800 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="/admin/usersData"
            >
              <img src="/user.svg" className="h-7 w-7"/>

              <span className="mx-2 text-sm font-medium">Users</span>
            </a>

            <a
              className="flex items-center px-3 py-2 text-gray-800 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              <img src="/suitcase.svg" className="h-7 w-7"/>

              <span className="mx-2 text-sm font-medium">Jobs</span>
            </a>

            <a
              href="/jobseeker/userPage/"
              className="flex items-center px-3 py-2 text-gray-800 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <img src="/settings.svg" className="h-7 w-7"/>

              <span className="mx-2 text-sm font-medium">Profile Settings</span>
            </a>

          </nav>

          <div className="mt-6">
            <div className="flex items-center justify-between mt-6">
              <a href="#" className="flex items-center gap-x-2">
                <span className="text-sm font-medium text-gray-700">
                  John Doe
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
