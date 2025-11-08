-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create rooms table
CREATE TABLE public.rooms (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  price NUMERIC NOT NULL,
  currency TEXT NOT NULL DEFAULT '₽',
  size TEXT NOT NULL,
  capacity INTEGER NOT NULL,
  beds TEXT NOT NULL,
  amenities TEXT[] NOT NULL DEFAULT '{}',
  featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create room_images table
CREATE TABLE public.room_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id TEXT NOT NULL REFERENCES public.rooms(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.room_images ENABLE ROW LEVEL SECURITY;

-- Public can view rooms
CREATE POLICY "Anyone can view rooms"
ON public.rooms
FOR SELECT
USING (true);

-- Public can view room images
CREATE POLICY "Anyone can view room images"
ON public.room_images
FOR SELECT
USING (true);

-- Only admins can modify rooms
CREATE POLICY "Admins can insert rooms"
ON public.rooms
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update rooms"
ON public.rooms
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete rooms"
ON public.rooms
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Only admins can modify room images
CREATE POLICY "Admins can insert room images"
ON public.room_images
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update room images"
ON public.room_images
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete room images"
ON public.room_images
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create trigger for updated_at
CREATE TRIGGER update_rooms_updated_at
BEFORE UPDATE ON public.rooms
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert existing rooms data
INSERT INTO public.rooms (id, name, description, full_description, price, currency, size, capacity, beds, amenities, featured) VALUES
('deluxe-king', 'Делюкс кинг рум', 'комната 1', 'Ощутите роскошь и комфорт в нашем номере Deluxe King Room. В этом просторном номере есть кровать размера «king-size» премиум-класса с постельным бельем из египетского хлопка, что гарантирует спокойный ночной сон. Из окон от пола до потолка открывается потрясающий вид на город, который наполняет пространство естественным светом днем ​​и предлагает захватывающий городской пейзаж ночью.

Элегантная ванная комната включает в себя тропический душ, глубокую ванну и туалетные принадлежности премиум-класса. Удобная зона отдыха с мягким креслом и письменным столом обеспечивает пространство как для отдыха, так и для работы. Современные удобства включают в себя 55-дюймовый смарт-телевизор, высокоскоростной Wi-Fi и сейф в номере.', 5000, '₽', '40 m²', 2, 'большая кровать', ARRAY['Кондиционер', 'Бесплатный WiFi', 'Телевизор', 'Мини бар', 'Сейв', 'Рабочий стол', 'Ванна', 'Халаты', 'Туалет', 'Фен'], true),
('premium-suite', 'Премиум сьют', 'комната 2', 'Побалуйте себя вершиной роскоши в нашем Premium Suite. Это просторное размещение предлагает отдельную гостиную и спальню, предоставляя достаточно места как для отдыха, так и для развлечений. Люкс обставлен дизайнерской мебелью и предлагает панорамный вид на город через панорамные окна.

В главной спальне есть кровать размера «king-size» с постельным бельем премиум-класса, а в гостиной — удобный диван, обеденный стол и полностью укомплектованный бар с напитками. В мраморной ванной комнате есть двойной туалетный столик, тропический душ и глубокая ванна, расположенная так, чтобы наслаждаться видом.

Дополнительные удобства включают 65-дюймовый смарт-телевизор как в спальне, так и в гостиной, звуковую систему Bluetooth, бесплатный высокоскоростной Wi-Fi и просторный рабочий стол. Гости Premium Suite также получают эксклюзивный доступ в наш Executive Lounge, предлагающий бесплатный завтрак, вечерние канапе и напитки премиум-класса.', 3000, '₽', '85 m²', 3, '1 большая кровать', ARRAY['Кондиционер', 'Бесплатный WiFi', 'Телевизор', 'Мини бар', 'Сейв', 'Рабочий стол', 'Ванна', 'Халаты', 'Туалет', 'Фен'], true),
('twin-room', 'Двухместный номер', 'комната 3', 'Наш улучшенный двухместный номер предлагает идеальный баланс комфорта и функциональности. В этом номере есть две роскошные односпальные кровати с постельным бельем премиум-класса. Он идеально подходит для друзей или коллег, путешествующих вместе. Номер тщательно спроектирован в современном стиле и предлагает вид на окрестности.

В хорошо оборудованной ванной комнате есть душевая кабина, туалетный столик и набор качественных туалетных принадлежностей. Специальная рабочая зона с письменным столом и эргономичным креслом обеспечивает комфортное пространство для деловых путешественников.

В числе удобств в номере 42-дюймовый смарт-телевизор, бесплатный высокоскоростной Wi-Fi, сейф в номере и климат-контроль. Дополнительные удобства включают мини-холодильник, принадлежности для приготовления чая и кофе, а также много места для хранения личных вещей.', 4500, '₽', 'много m²', 2, '2 кровати', ARRAY['тувалет', 'вифи', 'тиви', 'ковер', 'свет', 'одеяло', 'дверь', 'никита', 'люстра-свага', 'окно'], false),
('family-room', 'Семейная комната', 'комната 4', 'Наш семейный номер спроектирован с учетом потребностей путешествующих семей. В этом просторном номере есть кровать размера «king-size» и набор двухъярусных кроватей или диван-кровать, что позволяет с комфортом разместить двух взрослых и до двух детей. Продуманная планировка гарантирует, что всей семье хватит места, чтобы расслабиться и насладиться пребыванием.

В номере есть просторная ванная комната с совмещенной ванной и душем, что делает купание удобным для семей с маленькими детьми. Дополнительные удобства для семей включают небольшой холодильник для хранения закусок и напитков, микроволновую печь для приготовления простых блюд и обеденный стол, за которым семья может вместе поесть.

В число развлечений входят 50-дюймовый смарт-телевизор с доступом к детским каналам и потоковым сервисам, бесплатный высокоскоростной Wi-Fi и настольные игры, доступные по запросу. В номере также есть плотные шторы, чтобы обеспечить хороший ночной сон для всей семьи.', 3200, '₽', '48 m²', 4, '1 большая кровать + 1 маленькая кровать', ARRAY['Кондиционер', 'Бесплатный WiFi', 'Телевизор', 'Мини бар', 'Сейв', 'Рабочий стол', 'Ванна', 'Халаты', 'Туалет', 'Фен'], false),
('penthouse', 'Балдеж комната', 'комната 5', 'Ощутите непревзойденную роскошь в нашем пентхаусе, расположенном на верхнем этаже нашего отеля. Это необычное размещение предлагает просторную планировку с главной спальней с кроватью размера «king-size» премиум-класса, стильной гостиной, официальной обеденной зоной и полностью оборудованной мини-кухней.

Жемчужиной этого люкса является частная терраса, которая огибает все пространство, предлагая захватывающий вид на город и его окрестности на 360 градусов. Терраса с местами для сидения на открытом воздухе и обеденной зоной идеально подходит для трапез на свежем воздухе или просто для наслаждения захватывающими видами.

Главная ванная комната — это святилище релаксации с большой душевой кабиной с тропическим душем, отдельно стоящей ванной, расположенной так, чтобы наслаждаться видами, двумя раковинами и подогреваемыми полами. В люксе также есть гостевая ванная комната для удобства.

Дополнительные удобства включают в себя современную развлекательную систему с несколькими телевизорами, звуковую систему премиум-класса, полностью укомплектованный бар и камин в гостиной. Гости пентхауса могут воспользоваться круглосуточными услугами дворецкого, индивидуальной регистрацией заезда и выезда, а также бесплатным трансфером из аэропорта.', 1200, '₽', '120 m²', 4, '1 королевская кровать + 1 королевы кровать', ARRAY['Кондиционер', 'Бесплатный WiFi', 'Телевизор', 'Мини бар', 'Сейв', 'Рабочий стол', 'Ванна', 'Халаты', 'Туалет', 'Фен'], true);

-- Insert room images
INSERT INTO public.room_images (room_id, image_url, display_order) VALUES
('deluxe-king', 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1470&auto=format&fit=crop', 1),
('deluxe-king', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1470&auto=format&fit=crop', 2),
('deluxe-king', 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1374&auto=format&fit=crop', 3),
('premium-suite', 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1470&auto=format&fit=crop', 1),
('premium-suite', 'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1374&auto=format&fit=crop', 2),
('premium-suite', 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1374&auto=format&fit=crop', 3),
('twin-room', '/1.jpg', 1),
('twin-room', '/2.jpg', 2),
('twin-room', '/3.jpg', 3),
('family-room', 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1470&auto=format&fit=crop', 1),
('family-room', 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1470&auto=format&fit=crop', 2),
('family-room', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1470&auto=format&fit=crop', 3),
('penthouse', 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1450&auto=format&fit=crop', 1),
('penthouse', 'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1374&auto=format&fit=crop', 2),
('penthouse', 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1374&auto=format&fit=crop', 3);