import TaskForm from "@/components/TaskForm";

const DailyTasks = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Daily Tasks</h1>
      <TaskForm />
    </div>
  );
};

export default DailyTasks;