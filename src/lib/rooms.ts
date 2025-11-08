export type Room = {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  currency: string;
  size: string;
  capacity: number;
  beds: string;
  amenities: string[];
  images: string[];
  featured: boolean;
};

// Rooms are now fetched from the database
// Use the useRooms hook to load rooms dynamically
