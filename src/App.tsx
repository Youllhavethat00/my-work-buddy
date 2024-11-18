import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider, useUser } from "@/contexts/UserContext";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Index from "./pages/Index";
import WorkOrders from "./pages/WorkOrders";
import DailyTasks from "./pages/DailyTasks";
import Zones from "./pages/Zones";
import Events from "./pages/Events";

const queryClient = new QueryClient();

const AppContent = () => {
  const { username } = useUser();

  if (!username) {
    return <Login />;
  }

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/work-orders" element={<WorkOrders />} />
        <Route path="/daily-tasks" element={<DailyTasks />} />
        <Route path="/zones" element={<Zones />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </UserProvider>
  </QueryClientProvider>
);

export default App;