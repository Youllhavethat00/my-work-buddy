import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";

interface Event {
  id: number;
  title: string;
  description: string;
  date: Date;
}

const Events = () => {
  const { toast } = useToast();
  const [events, setEvents] = useState<Event[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) {
      toast({
        title: "Error",
        description: "Please select a date for the event",
        variant: "destructive",
      });
      return;
    }

    const newEvent: Event = {
      id: Date.now(),
      title,
      description,
      date,
    };

    setEvents([...events, newEvent]);
    setTitle("");
    setDescription("");
    setDate(undefined);

    toast({
      title: "Success",
      description: "Event has been added successfully",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Event Form */}
        <div className="space-y-6 bg-card p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Add New Event</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Event Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label>Date</Label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border mt-1"
              />
            </div>
            
            <Button type="submit" className="w-full">
              Add Event
            </Button>
          </form>
        </div>

        {/* Events Display */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Event List</h2>
          {events.length === 0 ? (
            <p className="text-muted-foreground">No upcoming events</p>
          ) : (
            <div className="space-y-4">
              {events
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .map((event) => (
                  <div
                    key={event.id}
                    className="bg-card p-4 rounded-lg shadow-md space-y-2 animate-fade-in"
                  >
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                    <p className="text-sm text-accent-foreground">
                      {format(event.date, "PPP")}
                    </p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;