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

export const rooms: Room[] = [
  {
    id: "deluxe-king",
    name: "Deluxe King Room",
    description: "комната 1",
    fullDescription:
      "Experience luxury and comfort in our Deluxe King Room. This spacious accommodation features a premium king-sized bed with Egyptian cotton linens, ensuring a restful night's sleep. The room offers stunning city views through floor-to-ceiling windows, filling the space with natural light during the day and offering a captivating cityscape at night.\n\nThe elegant bathroom includes a rain shower, deep soaking tub, and premium bath amenities. A comfortable seating area with a plush armchair and writing desk provides space for both relaxation and work. Modern amenities include a 55-inch smart TV, high-speed Wi-Fi, and an in-room safe.",
    price: 5000,
    currency: "₽",
    size: "40 m²",
    capacity: 2,
    beds: "большая кровать",
    amenities: [
      "Air conditioning",
      "Free WiFi",
      "Flat-screen TV",
      "Minibar",
      "Safe",
      "Desk",
      "Bathtub",
      "Bathrobes",
      "Toiletries",
      "Hair dryer",
    ],
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1374&auto=format&fit=crop",
    ],
    featured: true,
  },
  {
    id: "premium-suite",
    name: "Premium Suite",
    description: "комната 2",
    fullDescription:
      "Indulge in the pinnacle of luxury with our Premium Suite. This expansive accommodation offers a separate living area and bedroom, providing ample space for both relaxation and entertainment. The suite is appointed with designer furnishings and features panoramic views of the city through wrap-around windows.\n\nThe master bedroom features a king-sized bed with premium linens, while the living area includes a comfortable sofa, dining table, and a fully stocked wet bar. The marble bathroom includes a double vanity, walk-in rain shower, and a deep soaking tub positioned to enjoy the views.\n\nAdditional amenities include a 65-inch smart TV in both the bedroom and living area, a Bluetooth sound system, complimentary high-speed Wi-Fi, and a spacious work desk. Guests of the Premium Suite also enjoy exclusive access to our Executive Lounge, offering complimentary breakfast, evening canapés, and premium beverages.",
    price: 3000,
    currency: "₽",
    size: "85 m²",
    capacity: 3,
    beds: "1 King Bed + Sofa Bed",
    amenities: [
      "Separate living room",
      "Dining area",
      "Air conditioning",
      "Free WiFi",
      "Two Flat-screen TVs",
      "Minibar",
      "Safe",
      "Executive lounge access",
      "Nespresso machine",
      "Bathtub and shower",
      "Bathrobes and slippers",
      "Premium toiletries",
    ],
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1374&auto=format&fit=crop",
    ],
    featured: true,
  },
  {
    id: "twin-room",
    name: "Superior Twin Room",
    description: "комната 3",
    fullDescription:
      "Our Superior Twin Room offers a perfect balance of comfort and functionality. Featuring two plush single beds with premium linens, this room is ideal for friends or colleagues traveling together. The room is thoughtfully designed with a modern aesthetic and offers views of the surrounding area.\n\nThe well-appointed bathroom includes a walk-in shower, single vanity, and a selection of quality toiletries. A dedicated work area with a desk and ergonomic chair provides a comfortable space for business travelers.\n\nRoom amenities include a 42-inch smart TV, complimentary high-speed Wi-Fi, an in-room safe, and climate control. Additional conveniences include a mini-refrigerator, tea and coffee making facilities, and plenty of storage space for personal belongings.",
    price: 4500,
    currency: "₽",
    size: "32 m²",
    capacity: 2,
    beds: "2 Single Beds",
    amenities: [
      "Air conditioning",
      "Free WiFi",
      "Flat-screen TV",
      "Mini-refrigerator",
      "Safe",
      "Desk",
      "Shower",
      "Hair dryer",
      "Toiletries",
      "Tea/coffee maker",
    ],
    images: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1457&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1470&auto=format&fit=crop",
    ],
    featured: false,
  },
  {
    id: "family-room",
    name: "комната 4",
    description: "Spacious room perfect for families with children",
    fullDescription:
      "Our Family Room is designed with the needs of traveling families in mind. This spacious accommodation features a king-sized bed and a set of bunk beds or a sofa bed, comfortably accommodating two adults and up to two children. The thoughtful layout ensures there's plenty of space for the whole family to relax and enjoy their stay.\n\nThe room includes a spacious bathroom with a combination bathtub and shower, making bath time convenient for families with young children. Additional family-friendly amenities include a small refrigerator for storing snacks and drinks, a microwave for preparing simple meals, and a dining table where the family can enjoy meals together.\n\nEntertainment options include a 50-inch smart TV with access to children's channels and streaming services, complimentary high-speed Wi-Fi, and board games available upon request. The room also features blackout curtains to ensure a good night's sleep for the whole family.",
    price: 3200,
    currency: "₽",
    size: "48 m²",
    capacity: 4,
    beds: "1 King Bed + 1 Bunk Bed",
    amenities: [
      "Air conditioning",
      "Free WiFi",
      "Flat-screen TV",
      "Refrigerator",
      "Microwave",
      "Safe",
      "Dining table",
      "Bathtub/shower combo",
      "Hair dryer",
      "Children's amenities",
    ],
    images: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1470&auto=format&fit=crop",
    ],
    featured: false,
  },
  {
    id: "penthouse",
    name: "Penthouse Suite",
    description: "комната 5",
    fullDescription:
      "Experience unparalleled luxury in our Penthouse Suite, located on the top floor of our hotel. This extraordinary accommodation offers an expansive layout featuring a master bedroom with a premium king-sized bed, a stylish living room, a formal dining area, and a fully equipped kitchenette.\n\nThe crown jewel of this suite is the private terrace that wraps around the entire space, offering breathtaking 360-degree views of the city and beyond. Furnished with outdoor seating and a dining area, the terrace is perfect for al fresco meals or simply enjoying the spectacular vistas.\n\nThe master bathroom is a sanctuary of relaxation, featuring a large walk-in rainfall shower, a freestanding soaking tub positioned to take advantage of the views, double vanities, and heated floors. The suite also includes a guest bathroom for convenience.\n\nAdditional amenities include a state-of-the-art entertainment system with multiple TVs, a premium sound system, a fully stocked bar, and a fireplace in the living area. Penthouse guests enjoy 24-hour dedicated butler service, private check-in and check-out, and complimentary airport transfers.",
    price: 1200,
    currency: "₽",
    size: "120 m²",
    capacity: 4,
    beds: "1 King Bed + 1 Queen Sofa Bed",
    amenities: [
      "Private terrace",
      "Panoramic views",
      "Separate living and dining areas",
      "Kitchenette",
      "Butler service",
      "Air conditioning",
      "Free WiFi",
      "Multiple flat-screen TVs",
      "Sound system",
      "Fireplace",
      "Fully stocked bar",
      "Jacuzzi bathtub",
      "Rainfall shower",
      "Premium toiletries",
      "Bathrobes and slippers",
    ],
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1450&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1374&auto=format&fit=crop",
    ],
    featured: true,
  },
  {
    id: "twin-room",
    name: "комната 6",
    description: "Comfortable room with two single beds",
    fullDescription:
      "Our Superior Twin Room offers a perfect balance of comfort and functionality. Featuring two plush single beds with premium linens, this room is ideal for friends or colleagues traveling together. The room is thoughtfully designed with a modern aesthetic and offers views of the surrounding area.\n\nThe well-appointed bathroom includes a walk-in shower, single vanity, and a selection of quality toiletries. A dedicated work area with a desk and ergonomic chair provides a comfortable space for business travelers.\n\nRoom amenities include a 42-inch smart TV, complimentary high-speed Wi-Fi, an in-room safe, and climate control. Additional conveniences include a mini-refrigerator, tea and coffee making facilities, and plenty of storage space for personal belongings.",
    price: 4500,
    currency: "₽",
    size: "32 m²",
    capacity: 2,
    beds: "2 Single Beds",
    amenities: [
      "Air conditioning",
      "Free WiFi",
      "Flat-screen TV",
      "Mini-refrigerator",
      "Safe",
      "Desk",
      "Shower",
      "Hair dryer",
      "Toiletries",
      "Tea/coffee maker",
    ],
    images: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1457&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1470&auto=format&fit=crop",
    ],
    featured: false,
  },
];

export function getRoomById(id: string): Room | undefined {
  return rooms.find((room) => room.id === id);
}

export function getFeaturedRooms(): Room[] {
  return rooms.filter((room) => room.featured);
}
