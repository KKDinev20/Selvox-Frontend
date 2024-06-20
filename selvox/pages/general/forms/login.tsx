export default function Home() {
    return (
      <>
        <div className="flex items-center justify-center">
          <div className="bg-gray-100 text-gray-500 shadow-xl w-full h-3/4 overflow-hidden">
            <div className="md:flex w-full">
              <div className="hidden md:block w-1/2 bg-button py-10 px-10">
                <img src="/Login.png" className="w-100 h-auto" />
              </div>
              <div className="w-full md:w-1/2 py-16 px-10 md:px-10">
                <div className="text-center mb-10">
                  <h1 className="font-bold text-3xl text-gray-900">Log in </h1>
                  <p>Sign in your account</p>
                </div>
                <div>
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
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Smith"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-12">
                      <label className="text-xs font-semibold px-1">
                        Password
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="password"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="************"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <button className="block w-full max-w-xs mx-auto bg-button text-gray-900 hover:bg-navbar focus:bg-navbar rounded-lg px-3 py-3 font-semibold">
                        Sign up
                      </button>
  
                      <p className="text-sm mt-8 text-center">
                       Do you have an account?{" "}
                        <a
                          href="/general/forms/register"
                          className="text-logo font-semibold hover:underline ml-1"
                        >
                          Sign up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  