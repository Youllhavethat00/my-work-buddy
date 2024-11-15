import WorkOrderForm from "@/components/WorkOrderForm";

const WorkOrders = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Work Orders</h1>
      <div>
        <h2 className="text-xl font-semibold mb-4">Create Work Order</h2>
        <WorkOrderForm />
      </div>
    </div>
  );
};

export default WorkOrders;