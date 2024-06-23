import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Sidebar from "./sidebar";

export default function Dashboard() {
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
      <Sidebar/>
    </>
  );
}
