import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Bed, Users, Square, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { useRooms } from "@/hooks/useRooms";
import { Room } from "@/lib/rooms";

const RoomDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { rooms, loading: roomsLoading } = useRooms();
  const [room, setRoom] = useState<Room | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  console.log(selectedImage);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if (id && !roomsLoading) {
      const roomData = rooms.find(r => r.id === id);
      if (roomData) {
        setRoom(roomData);
        setSelectedImage(roomData.images[0] || "");
      }
      // Simulate loading for smoother transitions
      setTimeout(() => setIsLoading(false), 500);
    }
  }, [id, rooms, roomsLoading]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-hotel-taupe/30 mb-4"></div>
          <div className="text-hotel-taupe/50">Загрузка...</div>
        </div>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 md:px-6 pt-32 pb-20 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            Номер не найден
          </h1>
          <p className="text-muted-foreground mb-8">
            Извините, но запрашиваемый номер не существует.
          </p>
          <Button asChild>
            <Link to="/rooms">Вернуться к списку номеров</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <Link
              to="/rooms"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад к списку номеров
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <FadeIn>
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  <img
                    src={selectedImage || "/placeholder.svg"}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {room.images.map((image, index) => (
                    <button
                      key={index}
                      className={`aspect-[4/3] rounded-md overflow-hidden border-2 transition-all ${
                        selectedImage === image
                          ? "border-hotel-brown"
                          : "border-transparent hover:border-hotel-taupe"
                      }`}
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`${room.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </FadeIn>
            </div>

            <div>
              <FadeInStagger>
                <div className="mb-6">
                  <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                    {room.name}
                  </h1>
                  <p className="text-muted-foreground">{room.description}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="flex flex-col items-center justify-center p-4 bg-hotel-beige rounded-lg">
                    <Bed className="h-6 w-6 text-hotel-brown mb-2" />
                    <span className="text-sm text-muted-foreground text-center">
                      {room.beds}
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-hotel-beige rounded-lg">
                    <Users className="h-6 w-6 text-hotel-brown mb-2" />
                    <span className="text-sm text-muted-foreground text-center">
                      {room.capacity}{" "}
                      {room.capacity === 1
                        ? "гость"
                        : room.capacity < 5
                        ? "гостя"
                        : "гостей"}
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-hotel-beige rounded-lg">
                    <Square className="h-6 w-6 text-hotel-brown mb-2" />
                    <span className="text-sm text-muted-foreground text-center">
                      {room.size}
                    </span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-serif font-medium mb-4">
                    Описание
                  </h3>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {room.fullDescription}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-serif font-medium mb-4">
                    Удобства
                  </h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-hotel-brown mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-hotel-beige rounded-xl">
                  <div className="flex items-baseline justify-between mb-4">
                    <div className="text-3xl font-semibold">
                      {room.currency}
                      {room.price}
                    </div>
                    <div className="text-sm text-muted-foreground">за ночь</div>
                  </div>
                  <Button className="w-full mb-4" size="lg">
                    Забронировать
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    *Цены могут измениться в зависимости от дат и специальных
                    предложений
                  </p>
                </div>
              </FadeInStagger>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RoomDetail;
