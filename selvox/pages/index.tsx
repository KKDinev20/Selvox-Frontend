import Image from "next/image";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <section>
        <div className="grid px-2 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="place-self-center mr-auto lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl">
              Stop feeling lost in your job search!
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Selvox helps you discover your dream career by analyzing your
              psychological behavior and brain patterns. Unlock your full
              potential and find a job that excites you.
            </p>
            <a
              href="/general/page"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center bg-button text-gray-900 rounded-lg border border-gray-300 hover:bg-button focus:ring-4  dark:text-white"
            >
              Find your dream job
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/LP.png" alt="mockup" />
          </div>
        </div>
      </section>
      <section>
        <div className="grid px-2 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/LP.png" alt="mockup" />
          </div>
          <div className="place-self-center mr-auto lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl">
              Stop feeling lost in your job search!
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Selvox helps you discover your dream career by analyzing your
              psychological behavior and brain patterns. Unlock your full
              potential and find a job that excites you.
            </p>
            <a
              href="/general/page"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center bg-button text-gray-900 rounded-lg border border-gray-300 hover:bg-button focus:ring-4  dark:text-white"
            >
              Find your dream job
            </a>
          </div>
        
        </div>
      </section>
      <Footer />
    </>
  );
}
