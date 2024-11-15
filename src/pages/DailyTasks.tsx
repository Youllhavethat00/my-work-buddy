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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Mock data for task history
const mockTasks = [
  { id: 1, date: "2024-02-20", tasks: "Cleaned Zone A, Maintained equipment" },
  { id: 2, date: "2024-02-19", tasks: "Safety inspection, Updated logs" },
  { id: 3, date: "2024-02-18", tasks: "Inventory check, Equipment calibration" },
];

// Generate 10 empty rows for the input table
const emptyRows = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  jobs: "",
  zone: "",
  notes: ""
}));

const DailyTasks = () => {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-white">Jobs</h1>
      
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-card rounded-lg p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold mb-4 text-white">Tasks Completed</h2>
          <ScrollArea className="h-[400px] rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-white text-sm md:text-base w-1/4">Jobs</TableHead>
                  <TableHead className="text-white text-sm md:text-base w-1/4">Zone</TableHead>
                  <TableHead className="text-white text-sm md:text-base w-2/4">Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {emptyRows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="text-white">
                      <Input 
                        className="bg-transparent border-gray-600 text-white"
                        placeholder="Enter job"
                      />
                    </TableCell>
                    <TableCell className="text-white">
                      <Input 
                        className="bg-transparent border-gray-600 text-white"
                        placeholder="Enter zone"
                      />
                    </TableCell>
                    <TableCell className="text-white">
                      <Textarea 
                        className="bg-transparent border-gray-600 text-white min-h-[60px]"
                        placeholder="Enter notes"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>
        
        <div className="bg-card rounded-lg p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold mb-4 text-white">Job History</h2>
          <ScrollArea className="h-[400px] rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-white text-sm md:text-base">Date</TableHead>
                  <TableHead className="text-white text-sm md:text-base">Jobs Completed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockTasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell className="text-white text-sm md:text-base">{task.date}</TableCell>
                    <TableCell className="text-white text-sm md:text-base">{task.tasks}</TableCell>
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