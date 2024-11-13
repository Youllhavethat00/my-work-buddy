import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const zones = ["Zone A", "Zone B", "Zone C", "Zone D"];

const WorkOrderForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    zone: zones[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to a backend
    toast({
      title: "Work Order Created",
      description: "Your work order has been successfully created.",
    });
    setFormData({ title: "", description: "", zone: zones[0] });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) =>
            setFormData({ ...formData, title: e.target.value })
          }
          required
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          required
        />
      </div>
      <div>
        <Label htmlFor="zone">Zone</Label>
        <select
          id="zone"
          value={formData.zone}
          onChange={(e) =>
            setFormData({ ...formData, zone: e.target.value })
          }
          className="w-full border rounded-md p-2"
          required
        >
          {zones.map((zone) => (
            <option key={zone} value={zone}>
              {zone}
            </option>
          ))}
        </select>
      </div>
      <Button
        type="submit"
        className="w-full bg-accent-blue hover:bg-blue-600 transition-colors"
      >
        Create Work Order
      </Button>
    </form>
  );
};

export default WorkOrderForm;