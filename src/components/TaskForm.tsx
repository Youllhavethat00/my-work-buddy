import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const TaskForm = () => {
  const { toast } = useToast();
  const [taskData, setTaskData] = useState({
    date: new Date().toISOString().split("T")[0],
    tasks: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Tasks Saved",
      description: "Your daily tasks have been recorded.",
    });
    setTaskData({ ...taskData, tasks: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <Label htmlFor="date">Date</Label>
        <Input
          type="date"
          id="date"
          value={taskData.date}
          onChange={(e) =>
            setTaskData({ ...taskData, date: e.target.value })
          }
          required
        />
      </div>
      <div>
        <Label htmlFor="tasks">Tasks Completed</Label>
        <Textarea
          id="tasks"
          value={taskData.tasks}
          onChange={(e) =>
            setTaskData({ ...taskData, tasks: e.target.value })
          }
          placeholder="List all tasks completed today..."
          className="h-32"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-accent-green hover:bg-green-600 transition-colors"
      >
        Save Daily Tasks
      </Button>
    </form>
  );
};

export default TaskForm;