import React from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";


export const Button = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    // Programmatic navigation using useRouter
    router.push('/general/auth/register');
  };

  return (
    
      <button
        type="button"
        onClick={handleButtonClick}
        className="bg-logo bg-opacity-60 px-4 py-3 font-medium inline-flex items-center space-x-2 rounded-2xl"
      >
        Get Started
      </button>
  );
};
