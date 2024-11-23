import { useState, useEffect } from "react";
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { db } from "@/lib/firebase";
import { collection, addDoc, query, where, getDocs, orderBy, Timestamp } from "firebase/firestore";
import { format, startOfWeek, endOfWeek, differenceInHours, parseISO } from "date-fns";

interface TimeEntry {
  id: string;
  userId: string;
  clockIn: Date;
  clockOut: Date | null;
}

const TimeTracking = () => {
  const { username } = useUser();
  const { toast } = useToast();
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [currentEntry, setCurrentEntry] = useState<string | null>(null);
  const [weeklyHours, setWeeklyHours] = useState(0);
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);

  useEffect(() => {
    loadTimeEntries();
  }, [username]);

  const loadTimeEntries = async () => {
    if (!username) return;

    const timeEntriesRef = collection(db, "timeEntries");
    const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 }); // Monday
    const weekEnd = endOfWeek(new Date(), { weekStartsOn: 1 }); // Sunday

    const q = query(
      timeEntriesRef,
      where("userId", "==", username),
      where("clockIn", ">=", weekStart),
      where("clockIn", "<=", weekEnd),
      orderBy("clockIn", "desc")
    );

    const querySnapshot = await getDocs(q);
    const entries: TimeEntry[] = [];
    let totalHours = 0;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const entry = {
        id: doc.id,
        userId: data.userId,
        clockIn: data.clockIn.toDate(),
        clockOut: data.clockOut?.toDate() || null,
      };
      entries.push(entry);

      if (entry.clockOut) {
        totalHours += differenceInHours(entry.clockOut, entry.clockIn);
      }
    });

    setTimeEntries(entries);
    setWeeklyHours(totalHours);

    // Check if user is currently clocked in
    const lastEntry = entries[0];
    if (lastEntry && !lastEntry.clockOut) {
      setIsClockedIn(true);
      setCurrentEntry(lastEntry.id);
    }
  };

  const handleClockIn = async () => {
    if (!username) return;

    try {
      const timeEntriesRef = collection(db, "timeEntries");
      const docRef = await addDoc(timeEntriesRef, {
        userId: username,
        clockIn: Timestamp.now(),
        clockOut: null,
      });

      setIsClockedIn(true);
      setCurrentEntry(docRef.id);
      toast({
        title: "Clocked In",
        description: `Clock-in time: ${format(new Date(), "h:mm a")}`,
      });

      loadTimeEntries();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to clock in. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleClockOut = async () => {
    if (!username || !currentEntry) return;

    try {
      const timeEntriesRef = collection(db, "timeEntries");
      await addDoc(timeEntriesRef, {
        userId: username,
        clockOut: Timestamp.now(),
      });

      setIsClockedIn(false);
      setCurrentEntry(null);
      toast({
        title: "Clocked Out",
        description: `Clock-out time: ${format(new Date(), "h:mm a")}`,
      });

      loadTimeEntries();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to clock out. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Time Tracking</h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Current Week Hours</p>
            <p className="text-2xl font-bold">{weeklyHours.toFixed(1)}h</p>
          </div>
          <Button
            onClick={isClockedIn ? handleClockOut : handleClockIn}
            className={isClockedIn ? "bg-destructive hover:bg-destructive/90" : "bg-accent-green hover:bg-accent-green/90"}
          >
            {isClockedIn ? "Clock Out" : "Clock In"}
          </Button>
        </div>
      </div>

      <div className="bg-card rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Time History</h3>
        <ScrollArea className="h-[300px]">
          <div className="space-y-4">
            {timeEntries.map((entry) => (
              <div
                key={entry.id}
                className="flex justify-between items-center p-3 bg-muted rounded-lg"
              >
                <div>
                  <p className="font-medium">
                    {format(entry.clockIn, "EEEE, MMMM d")}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {format(entry.clockIn, "h:mm a")} -{" "}
                    {entry.clockOut
                      ? format(entry.clockOut, "h:mm a")
                      : "Currently Working"}
                  </p>
                </div>
                {entry.clockOut && (
                  <p className="font-medium">
                    {differenceInHours(entry.clockOut, entry.clockIn).toFixed(1)}h
                  </p>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default TimeTracking;