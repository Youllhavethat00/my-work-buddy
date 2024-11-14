import TaskForm from "@/components/TaskForm";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock data - in a real app this would come from your backend
const mockTasks = [
  { id: 1, date: "2024-02-20", tasks: "Cleaned Zone A, Maintained equipment" },
  { id: 2, date: "2024-02-19", tasks: "Safety inspection, Updated logs" },
  { id: 3, date: "2024-02-18", tasks: "Inventory check, Equipment calibration" },
];

const DailyTasks = () => {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Jobs</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-card rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-white">Add New Jobs</h2>
          <TaskForm />
        </div>
        
        <div className="bg-card rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-white">Job History</h2>
          <ScrollArea className="h-[400px] rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-white">Date</TableHead>
                  <TableHead className="text-white">Jobs Completed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockTasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell className="text-white">{task.date}</TableCell>
                    <TableCell className="text-white">{task.tasks}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default DailyTasks;