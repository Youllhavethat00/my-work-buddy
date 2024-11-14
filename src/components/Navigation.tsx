import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-primary text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="text-xl md:text-2xl font-bold">The Quarry</div>
          <div className="text-xs md:text-sm text-accent-gray">Work Manager</div>
        </div>
        <div className="space-x-4 text-sm md:text-base">
          <Link
            to="/work-orders"
            className={`hover:text-accent-blue transition-colors ${
              isActive("/work-orders") ? "text-accent-blue" : ""
            }`}
          >
            Work Orders
          </Link>
          <Link
            to="/daily-tasks"
            className={`hover:text-accent-green transition-colors ${
              isActive("/daily-tasks") ? "text-accent-green" : ""
            }`}
          >
            Jobs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;