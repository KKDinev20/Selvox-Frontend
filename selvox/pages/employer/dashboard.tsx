import Sidebar from './sidebar';

const EmployerLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        {children}
      </div>
    </div>
  );
};

export default EmployerLayout;
