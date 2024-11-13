import { Card } from "@/components/ui/card";

type WorkOrder = {
  id: number;
  title: string;
  description: string;
  zone: string;
  status: "New" | "In Progress" | "Completed";
};

// Mock data - in a real app this would come from a backend
const mockWorkOrders: WorkOrder[] = [
  {
    id: 1,
    title: "Fix Machinery",
    description: "Regular maintenance needed",
    zone: "Zone A",
    status: "New",
  },
  {
    id: 2,
    title: "Clean Area",
    description: "Deep cleaning required",
    zone: "Zone B",
    status: "In Progress",
  },
];

const WorkOrderList = () => {
  const getStatusColor = (status: WorkOrder["status"]) => {
    switch (status) {
      case "New":
        return "bg-accent-blue";
      case "In Progress":
        return "bg-accent-green";
      case "Completed":
        return "bg-accent-gray";
    }
  };

  return (
    <div className="space-y-4">
      {mockWorkOrders.map((order) => (
        <Card key={order.id} className="p-4 hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg">{order.title}</h3>
              <p className="text-sm text-gray-600">{order.description}</p>
              <p className="text-sm text-gray-500 mt-2">Zone: {order.zone}</p>
            </div>
            <span
              className={`${getStatusColor(
                order.status
              )} text-white px-3 py-1 rounded-full text-sm`}
            >
              {order.status}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default WorkOrderList;