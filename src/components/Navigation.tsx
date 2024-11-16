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
      <nav className="bg-gradient-to-r from-primary to-[#1A1F2C] text-white p-2 md:p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-2 md:px-4">
          <div className="flex items-center">
            <div className="text-xl md:text-2xl font-bold pl-1 md:pl-0 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              The Quarry
            </div>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="space-x-4 text-base">
              <Link
                to="/work-orders"
                className={`px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 ${
                  isActive("/work-orders") ? "text-accent-blue bg-white/5" : ""
                }`}
              >
                Work Orders
              </Link>
              <Link
                to="/daily-tasks"
                className={`px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 ${
                  isActive("/daily-tasks") ? "text-accent-green bg-white/5" : ""
                }`}
              >
                Jobs
              </Link>
              <Link
                to="/zones"
                className={`px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 ${
                  isActive("/zones") ? "text-accent-gray bg-white/5" : ""
                }`}
              >
                Zones
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium bg-white/10 px-3 py-1.5 rounded-full">
              Hi, {username}
            </span>
            <Button 
              variant="ghost" 
              className="hover:text-accent-blue hover:bg-white/10 transition-all duration-300"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden bg-gradient-to-b from-[#1A1F2C] to-background p-4 border-b border-white/10">
        <div className="flex flex-col space-y-2">
          <Link
            to="/work-orders"
            className={`p-3 rounded-lg hover:bg-white/5 transition-all duration-300 flex items-center space-x-2 ${
              isActive("/work-orders") ? "bg-white/10 text-accent-blue" : ""
            }`}
          >
            <span className="text-lg">Work Orders</span>
          </Link>
          <Link
            to="/daily-tasks"
            className={`p-3 rounded-lg hover:bg-white/5 transition-all duration-300 flex items-center space-x-2 ${
              isActive("/daily-tasks") ? "bg-white/10 text-accent-green" : ""
            }`}
          >
            <span className="text-lg">Jobs</span>
          </Link>
          <Link
            to="/zones"
            className={`p-3 rounded-lg hover:bg-white/5 transition-all duration-300 flex items-center space-x-2 ${
              isActive("/zones") ? "bg-white/10 text-accent-gray" : ""
            }`}
          >
            <span className="text-lg">Zones</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;