import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Zone {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const mockZones: Zone[] = [
  {
    id: 1,
    name: "Zone A",
    description: "Main extraction area with heavy machinery access",
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
  },
  {
    id: 2,
    name: "Zone B",
    description: "Processing and sorting facility",
    imageUrl: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
  },
  {
    id: 3,
    name: "Zone C",
    description: "Storage and distribution center",
    imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
  },
];

const Zones = () => {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-white">Zone Mapping</h1>
      
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
          {mockZones.map((zone) => (
            <Card key={zone.id} className="bg-card border-accent-gray/20">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl text-white">{zone.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div 
                  className="w-full h-48 rounded-md bg-cover bg-center"
                  style={{ backgroundImage: `url(${zone.imageUrl})` }}
                />
                <p className="text-sm md:text-base text-accent-gray">
                  {zone.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Zones;