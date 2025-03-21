
import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Room } from "@/lib/rooms";

interface RoomCardProps {
  room: Room;
  featured?: boolean;
}

export function RoomCard({ room, featured = false }: RoomCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className={`group overflow-hidden border border-border rounded-xl bg-card transition-all duration-300 hover:shadow-lg ${
        featured ? "h-full flex flex-col" : ""
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className={`h-full w-full ${!imageLoaded ? 'image-loading' : ''}`}>
          <img
            src={room.images[0] || "/placeholder.svg"}
            alt={room.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 left-4">
          <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-foreground">
            {room.beds}
          </Badge>
        </div>
      </div>
      
      <div className="flex flex-col p-6 flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-serif text-xl font-medium">{room.name}</h3>
          <div className="flex items-baseline">
            <span className="text-xl font-semibold">{room.currency}{room.price}</span>
            <span className="text-sm text-muted-foreground ml-1">/ночь</span>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-4 flex-grow">{room.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="bg-accent/50">
            {room.size}
          </Badge>
          <Badge variant="outline" className="bg-accent/50">
            {room.capacity} {room.capacity === 1 ? 'гость' : room.capacity < 5 ? 'гостя' : 'гостей'}
          </Badge>
        </div>
        
        <Button className="w-full rounded-md" asChild>
          <Link to={`/room/${room.id}`} className="mt-2">
            Посмотреть детали
          </Link>
        </Button>
      </div>
    </div>
  );
}
