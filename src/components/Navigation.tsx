import { Link, useLocation } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const { username, logout } = useUser();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <>
      <nav className="bg-primary text-white p-2 md:p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-2 md:px-4">
          <div className="flex items-center">
            <div className="text-xl md:text-2xl font-bold pl-1 md:pl-0">The Quarry</div>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="space-x-4 text-base">
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
              <Link
                to="/zones"
                className={`hover:text-accent-gray transition-colors ${
                  isActive("/zones") ? "text-accent-gray" : ""
                }`}
              >
                Zones
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <span>Hi, {username}</span>
            <Button 
              variant="ghost" 
              className="hover:text-accent-blue"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden bg-background p-4 border-b">
        <div className="flex flex-col space-y-2">
          <Link
            to="/work-orders"
            className={`p-2 rounded-md hover:bg-primary/10 transition-colors ${
              isActive("/work-orders") ? "text-accent-blue" : ""
            }`}
          >
            Work Orders
          </Link>
          <Link
            to="/daily-tasks"
            className={`p-2 rounded-md hover:bg-primary/10 transition-colors ${
              isActive("/daily-tasks") ? "text-accent-green" : ""
            }`}
          >
            Jobs
          </Link>
          <Link
            to="/zones"
            className={`p-2 rounded-md hover:bg-primary/10 transition-colors ${
              isActive("/zones") ? "text-accent-gray" : ""
            }`}
          >
            Zones
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;