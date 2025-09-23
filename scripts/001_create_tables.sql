-- Create users profile table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  phone TEXT,
  avatar_url TEXT,
  user_type TEXT CHECK (user_type IN ('customer', 'dealer', 'admin')) DEFAULT 'customer',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create cars table
CREATE TABLE IF NOT EXISTS public.cars (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  brand TEXT NOT NULL,
  model TEXT NOT NULL,
  year INTEGER NOT NULL,
  mileage INTEGER,
  fuel_type TEXT CHECK (fuel_type IN ('petrol', 'diesel', 'electric', 'hybrid')),
  transmission TEXT CHECK (transmission IN ('manual', 'automatic')),
  body_type TEXT CHECK (body_type IN ('sedan', 'suv', 'hatchback', 'coupe', 'convertible', 'wagon', 'pickup')),
  color TEXT,
  price_sale DECIMAL(10,2),
  price_rent_daily DECIMAL(8,2),
  price_rent_weekly DECIMAL(8,2),
  price_rent_monthly DECIMAL(8,2),
  availability_type TEXT CHECK (availability_type IN ('sale', 'rent', 'both')) NOT NULL,
  status TEXT CHECK (status IN ('available', 'rented', 'sold', 'maintenance')) DEFAULT 'available',
  location TEXT,
  features TEXT[], -- Array of features like ['GPS', 'AC', 'Bluetooth']
  images TEXT[], -- Array of image URLs
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create bookings table for car rentals
CREATE TABLE IF NOT EXISTS public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  car_id UUID NOT NULL REFERENCES public.cars(id) ON DELETE CASCADE,
  customer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  status TEXT CHECK (status IN ('pending', 'confirmed', 'active', 'completed', 'cancelled')) DEFAULT 'pending',
  payment_status TEXT CHECK (payment_status IN ('pending', 'paid', 'refunded')) DEFAULT 'pending',
  payment_method TEXT,
  payment_reference TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create sales table for car purchases
CREATE TABLE IF NOT EXISTS public.sales (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  car_id UUID NOT NULL REFERENCES public.cars(id) ON DELETE CASCADE,
  buyer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  seller_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  sale_price DECIMAL(10,2) NOT NULL,
  status TEXT CHECK (status IN ('pending', 'completed', 'cancelled')) DEFAULT 'pending',
  payment_status TEXT CHECK (payment_status IN ('pending', 'paid', 'refunded')) DEFAULT 'pending',
  payment_method TEXT,
  payment_reference TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  car_id UUID NOT NULL REFERENCES public.cars(id) ON DELETE CASCADE,
  reviewer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  booking_id UUID REFERENCES public.bookings(id) ON DELETE SET NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create favorites table
CREATE TABLE IF NOT EXISTS public.favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  car_id UUID NOT NULL REFERENCES public.cars(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, car_id)
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cars ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sales ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- RLS Policies for cars
CREATE POLICY "Anyone can view available cars" ON public.cars FOR SELECT USING (status = 'available' OR owner_id = auth.uid());
CREATE POLICY "Owners can manage their cars" ON public.cars FOR ALL USING (owner_id = auth.uid());
CREATE POLICY "Users can insert their own cars" ON public.cars FOR INSERT WITH CHECK (owner_id = auth.uid());

-- RLS Policies for bookings
CREATE POLICY "Users can view their own bookings" ON public.bookings FOR SELECT USING (customer_id = auth.uid() OR car_id IN (SELECT id FROM public.cars WHERE owner_id = auth.uid()));
CREATE POLICY "Users can create bookings" ON public.bookings FOR INSERT WITH CHECK (customer_id = auth.uid());
CREATE POLICY "Users can update their own bookings" ON public.bookings FOR UPDATE USING (customer_id = auth.uid());

-- RLS Policies for sales
CREATE POLICY "Users can view their sales" ON public.sales FOR SELECT USING (buyer_id = auth.uid() OR seller_id = auth.uid());
CREATE POLICY "Users can create sales" ON public.sales FOR INSERT WITH CHECK (buyer_id = auth.uid());

-- RLS Policies for reviews
CREATE POLICY "Anyone can view reviews" ON public.reviews FOR SELECT USING (true);
CREATE POLICY "Users can create reviews" ON public.reviews FOR INSERT WITH CHECK (reviewer_id = auth.uid());
CREATE POLICY "Users can update their own reviews" ON public.reviews FOR UPDATE USING (reviewer_id = auth.uid());

-- RLS Policies for favorites
CREATE POLICY "Users can manage their favorites" ON public.favorites FOR ALL USING (user_id = auth.uid());

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_cars_availability_type ON public.cars(availability_type);
CREATE INDEX IF NOT EXISTS idx_cars_status ON public.cars(status);
CREATE INDEX IF NOT EXISTS idx_cars_brand_model ON public.cars(brand, model);
CREATE INDEX IF NOT EXISTS idx_cars_price_sale ON public.cars(price_sale);
CREATE INDEX IF NOT EXISTS idx_cars_price_rent_daily ON public.cars(price_rent_daily);
CREATE INDEX IF NOT EXISTS idx_bookings_dates ON public.bookings(start_date, end_date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON public.bookings(status);
