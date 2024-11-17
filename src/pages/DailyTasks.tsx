import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

// Mock data for task history
const mockTasks = [
  { id: 1, date: "2024-02-20", tasks: "Cleaned Zone A, Maintained equipment" },
  { id: 2, date: "2024-02-19", tasks: "Safety inspection, Updated logs" },
  { id: 3, date: "2024-02-18", tasks: "Inventory check, Equipment calibration" },
];

interface JobEntry {
  id: number;
  jobs: string;
  zone: string;
  notes: string;
}

const DailyTasks = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [jobEntries, setJobEntries] = useState<JobEntry[]>([
    { id: 1, jobs: "", zone: "", notes: "" }
  ]);

  const addNewJob = () => {
    setJobEntries(prev => [...prev, {
      id: prev.length + 1,
      jobs: "",
      zone: "",
      notes: ""
    }]);
  };

  const updateJobEntry = (id: number, field: keyof JobEntry, value: string) => {
    setJobEntries(prev =>
      prev.map(entry =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  return (
    <div className="container mx-auto py-8 space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-white">Jobs</h1>
      
      <div className="grid grid-cols-1 gap-8">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg md:text-xl font-semibold text-white">Tasks Completed</h2>
            <Button 
              onClick={addNewJob}
              className="bg-accent-blue hover:bg-accent-blue/90"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Job
            </Button>
          </div>

          <div className="space-y-6">
            {jobEntries.map((entry) => (
              <div 
                key={entry.id}
                className="bg-card rounded-lg p-4 md:p-6 space-y-4"
              >
                <h3 className="text-white font-medium mb-4">Job #{entry.id}</h3>
                <div className="grid grid-cols-[120px,1fr] md:grid-cols-[150px,1fr] gap-4">
                  <label className="text-white text-sm md:text-base self-center">Job Description:</label>
                  <Input 
                    className={`bg-transparent border-gray-600 text-white transition-all duration-300 ${
                      focusedField === `jobs-${entry.id}` ? "h-24 md:h-10" : ""
                    }`}
                    placeholder="Enter job description"
                    value={entry.jobs}
                    onChange={(e) => updateJobEntry(entry.id, 'jobs', e.target.value)}
                    onFocus={() => setFocusedField(`jobs-${entry.id}`)}
                    onBlur={() => setFocusedField(null)}
                  />
                  
                  <label className="text-white text-sm md:text-base self-center">Zone:</label>
                  <Input 
                    className={`bg-transparent border-gray-600 text-white transition-all duration-300 ${
                      focusedField === `zone-${entry.id}` ? "h-24 md:h-10" : ""
                    }`}
                    placeholder="Enter zone"
                    value={entry.zone}
                    onChange={(e) => updateJobEntry(entry.id, 'zone', e.target.value)}
                    onFocus={() => setFocusedField(`zone-${entry.id}`)}
                    onBlur={() => setFocusedField(null)}
                  />
                  
                  <label className="text-white text-sm md:text-base self-start mt-2">Notes:</label>
                  <Textarea 
                    className={`bg-transparent border-gray-600 text-white transition-all duration-300 ${
                      focusedField === `notes-${entry.id}` ? "h-24" : "min-h-[60px]"
                    }`}
                    placeholder="Enter notes"
                    value={entry.notes}
                    onChange={(e) => updateJobEntry(entry.id, 'notes', e.target.value)}
                    onFocus={() => setFocusedField(`notes-${entry.id}`)}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-card rounded-lg p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold mb-4 text-white">Job History</h2>
          <ScrollArea className="h-[400px] rounded-md border">
            <div className="space-y-4 p-4">
              {mockTasks.map((task) => (
                <div key={task.id} className="border-b border-gray-700 pb-4">
                  <p className="text-white text-sm md:text-base font-medium">{task.date}</p>
                  <p className="text-gray-400 text-sm mt-1">{task.tasks}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default DailyTasks;