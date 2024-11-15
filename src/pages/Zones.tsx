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
    name: "Zone 1",
    description: "Main entrance, Bridal Suite, Warehouse",
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
  },
  {
    id: 2,
    name: "Zone 2",
    description: "Yard 1 The big island ",
    imageUrl: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
  },
  {
    id: 3,
    name: "Zone 3",
    description: "Small island, the Terrazzo, and the grass stip in front of the rock",
    imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
  },
  {
    id: 4,
    name: "Zone 4",
    description: "The Canyon entrace (both sides), and Canyon",
    imageUrl: "https://share.icloud.com/photos/059ubj0qxBEtND5ytmSlmnQvw",
  },
  {
    id: 5,
    name: "Zone 5",
    description: "The Carrara",
    imageUrl: "https://share.icloud.com/photos/0f2a6p-4v*HtQERPoxyTfVuLQ",
  },
  {
    id: 6,
    name: "Zone 6",
    description: "Parking Lot",
    imageUrl: "",
  },
  {
    id: 7,
    name: "Zone 7",
    description: "Office",
    imageUrl: "",
  }
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