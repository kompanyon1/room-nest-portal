import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Trash2, Plus, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Room {
  id: string;
  name: string;
  description: string;
  full_description: string;
  price: number;
  currency: string;
  size: string;
  capacity: number;
  beds: string;
  amenities: string[];
  featured: boolean;
  images: { id: string; url: string; order: number }[];
}

export const RoomsManagement = () => {
  const { toast } = useToast();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [newAmenity, setNewAmenity] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = async () => {
    setLoading(true);
    const { data: roomsData, error: roomsError } = await supabase
      .from('rooms')
      .select('*')
      .order('created_at', { ascending: true });

    if (roomsError) {
      toast({
        title: "Ошибка загрузки",
        description: roomsError.message,
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    const { data: imagesData, error: imagesError } = await supabase
      .from('room_images')
      .select('*')
      .order('display_order', { ascending: true });

    if (imagesError) {
      toast({
        title: "Ошибка загрузки изображений",
        description: imagesError.message,
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    const roomsWithImages: Room[] = (roomsData || []).map((room) => ({
      id: room.id,
      name: room.name,
      description: room.description,
      full_description: room.full_description,
      price: Number(room.price),
      currency: room.currency,
      size: room.size,
      capacity: room.capacity,
      beds: room.beds,
      amenities: room.amenities,
      featured: room.featured,
      images: (imagesData || [])
        .filter((img) => img.room_id === room.id)
        .map((img) => ({ id: img.id, url: img.image_url, order: img.display_order })),
    }));

    setRooms(roomsWithImages);
    setLoading(false);
  };

  const updateRoom = async (roomId: string, updates: Partial<Room>) => {
    setSaving(roomId);
    const { error } = await supabase
      .from('rooms')
      .update({
        name: updates.name,
        description: updates.description,
        full_description: updates.full_description,
        price: updates.price,
        currency: updates.currency,
        size: updates.size,
        capacity: updates.capacity,
        beds: updates.beds,
        amenities: updates.amenities,
        featured: updates.featured,
      })
      .eq('id', roomId);

    if (error) {
      toast({
        title: "Ошибка сохранения",
        description: error.message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Сохранено",
        description: "Изменения успешно сохранены"
      });
    }
    setSaving(null);
  };

  const addAmenity = (roomId: string) => {
    const amenity = newAmenity[roomId]?.trim();
    if (!amenity) return;

    const room = rooms.find(r => r.id === roomId);
    if (!room) return;

    const updatedAmenities = [...room.amenities, amenity];
    setRooms(rooms.map(r => 
      r.id === roomId ? { ...r, amenities: updatedAmenities } : r
    ));
    setNewAmenity({ ...newAmenity, [roomId]: '' });
  };

  const removeAmenity = (roomId: string, amenityIndex: number) => {
    const room = rooms.find(r => r.id === roomId);
    if (!room) return;

    const updatedAmenities = room.amenities.filter((_, i) => i !== amenityIndex);
    setRooms(rooms.map(r => 
      r.id === roomId ? { ...r, amenities: updatedAmenities } : r
    ));
  };

  const deleteImage = async (imageId: string, roomId: string) => {
    const { error } = await supabase
      .from('room_images')
      .delete()
      .eq('id', imageId);

    if (error) {
      toast({
        title: "Ошибка удаления",
        description: error.message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Удалено",
        description: "Изображение удалено"
      });
      loadRooms();
    }
  };

  const addImage = async (roomId: string, imageUrl: string) => {
    const room = rooms.find(r => r.id === roomId);
    if (!room) return;

    const maxOrder = Math.max(0, ...room.images.map(img => img.order));
    
    const { error } = await supabase
      .from('room_images')
      .insert({
        room_id: roomId,
        image_url: imageUrl,
        display_order: maxOrder + 1
      });

    if (error) {
      toast({
        title: "Ошибка добавления",
        description: error.message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Добавлено",
        description: "Изображение добавлено"
      });
      loadRooms();
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Управление номерами</h2>
        <p className="text-muted-foreground">Редактирование информации о номерах отеля</p>
      </div>

      {rooms.map((room) => (
        <Card key={room.id}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{room.name}</span>
              <Button
                size="sm"
                variant={room.featured ? "default" : "outline"}
                onClick={() => {
                  const updatedRoom = { ...room, featured: !room.featured };
                  setRooms(rooms.map(r => r.id === room.id ? updatedRoom : r));
                  updateRoom(room.id, updatedRoom);
                }}
              >
                {room.featured ? "Избранный" : "Не избранный"}
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Название</Label>
                <Input
                  value={room.name}
                  onChange={(e) => setRooms(rooms.map(r => 
                    r.id === room.id ? { ...r, name: e.target.value } : r
                  ))}
                />
              </div>
              <div className="space-y-2">
                <Label>Короткое описание</Label>
                <Input
                  value={room.description}
                  onChange={(e) => setRooms(rooms.map(r => 
                    r.id === room.id ? { ...r, description: e.target.value } : r
                  ))}
                />
              </div>
              <div className="space-y-2">
                <Label>Цена (₽)</Label>
                <Input
                  type="number"
                  value={room.price}
                  onChange={(e) => setRooms(rooms.map(r => 
                    r.id === room.id ? { ...r, price: Number(e.target.value) } : r
                  ))}
                />
              </div>
              <div className="space-y-2">
                <Label>Размер</Label>
                <Input
                  value={room.size}
                  onChange={(e) => setRooms(rooms.map(r => 
                    r.id === room.id ? { ...r, size: e.target.value } : r
                  ))}
                />
              </div>
              <div className="space-y-2">
                <Label>Вместимость</Label>
                <Input
                  type="number"
                  value={room.capacity}
                  onChange={(e) => setRooms(rooms.map(r => 
                    r.id === room.id ? { ...r, capacity: Number(e.target.value) } : r
                  ))}
                />
              </div>
              <div className="space-y-2">
                <Label>Кровати</Label>
                <Input
                  value={room.beds}
                  onChange={(e) => setRooms(rooms.map(r => 
                    r.id === room.id ? { ...r, beds: e.target.value } : r
                  ))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Полное описание</Label>
              <Textarea
                value={room.full_description}
                onChange={(e) => setRooms(rooms.map(r => 
                  r.id === room.id ? { ...r, full_description: e.target.value } : r
                ))}
                rows={6}
              />
            </div>

            <div className="space-y-2">
              <Label>Удобства</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {room.amenities.map((amenity, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {amenity}
                    <button
                      onClick={() => removeAmenity(room.id, index)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Новое удобство"
                  value={newAmenity[room.id] || ''}
                  onChange={(e) => setNewAmenity({ ...newAmenity, [room.id]: e.target.value })}
                  onKeyPress={(e) => e.key === 'Enter' && addAmenity(room.id)}
                />
                <Button onClick={() => addAmenity(room.id)} size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Изображения</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {room.images.map((image) => (
                  <div key={image.id} className="relative group">
                    <img src={image.url} alt="Room" className="w-full h-32 object-cover rounded-lg" />
                    <Button
                      size="icon"
                      variant="destructive"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => deleteImage(image.id, room.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="URL изображения"
                  id={`new-image-${room.id}`}
                />
                <Button onClick={() => {
                  const input = document.getElementById(`new-image-${room.id}`) as HTMLInputElement;
                  const url = input?.value;
                  if (url) {
                    addImage(room.id, url);
                    input.value = '';
                  }
                }}>
                  Добавить
                </Button>
              </div>
            </div>

            <Button
              onClick={() => updateRoom(room.id, room)}
              disabled={saving === room.id}
              className="w-full"
            >
              {saving === room.id ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              Сохранить изменения
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
