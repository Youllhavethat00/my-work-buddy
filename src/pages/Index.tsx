import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-bold">Work Management System</h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Efficiently manage work orders and track daily tasks across different zones
        </p>
        <div className="space-x-4">
          <Button
            onClick={() => navigate("/work-orders")}
            className="bg-accent-blue hover:bg-blue-600 transition-colors"
          >
            View Work Orders
          </Button>
          <Button
            onClick={() => navigate("/daily-tasks")}
            className="bg-accent-green hover:bg-green-600 transition-colors"
          >
            Track Daily Tasks
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;