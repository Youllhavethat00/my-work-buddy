import WorkOrderForm from "@/components/WorkOrderForm";
import WorkOrderList from "@/components/WorkOrderList";

const WorkOrders = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Work Orders</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Create Work Order</h2>
          <WorkOrderForm />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Active Work Orders</h2>
          <WorkOrderList />
        </div>
      </div>
    </div>
  );
};

export default WorkOrders;