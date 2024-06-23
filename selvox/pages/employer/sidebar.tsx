import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="h-screen w-1/4 bg-gray-800 text-white">
      <ul className="space-y-4 p-4">
        <li className="cursor-pointer" onClick={() => handleNavigation('/updateUser')}>Update Profile</li>
        <li className="cursor-pointer" onClick={() => handleNavigation('/employer/post-job')}>Post Job Positions</li>
        <li className="cursor-pointer" onClick={() => handleNavigation('/employer/view-applications')}>View Job Applications</li>
        <li className="cursor-pointer" onClick={() => handleNavigation('/employer/dashboard')}>Dashboard</li>
      </ul>
    </div>
  );
};

export default Sidebar;
