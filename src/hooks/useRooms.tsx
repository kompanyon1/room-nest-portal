import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Room } from '@/lib/rooms';

export const useRooms = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = async () => {
    try {
      const { data: roomsData, error: roomsError } = await supabase
        .from('rooms')
        .select('*')
        .order('created_at', { ascending: true });

      if (roomsError) throw roomsError;

      const { data: imagesData, error: imagesError } = await supabase
        .from('room_images')
        .select('*')
        .order('display_order', { ascending: true });

      if (imagesError) throw imagesError;

      const roomsWithImages: Room[] = (roomsData || []).map((room) => ({
        id: room.id,
        name: room.name,
        description: room.description,
        fullDescription: room.full_description,
        price: Number(room.price),
        currency: room.currency,
        size: room.size,
        capacity: room.capacity,
        beds: room.beds,
        amenities: room.amenities,
        images: (imagesData || [])
          .filter((img) => img.room_id === room.id)
          .map((img) => img.image_url),
        featured: room.featured,
      }));

      setRooms(roomsWithImages);
    } catch (error) {
      console.error('Error loading rooms:', error);
    } finally {
      setLoading(false);
    }
  };

  return { rooms, loading, reloadRooms: loadRooms };
};
