-- Insert sample cars data (only if no cars exist)
INSERT INTO public.cars (
  owner_id, title, description, brand, model, year, mileage, fuel_type, 
  transmission, body_type, color, price_sale, price_rent_daily, 
  availability_type, location, features, images
) 
SELECT 
  (SELECT id FROM public.profiles LIMIT 1),
  'Toyota Camry 2022 - Excellent Condition',
  'Well-maintained Toyota Camry with low mileage. Perfect for both city driving and long trips.',
  'Toyota',
  'Camry',
  2022,
  15000,
  'petrol',
  'automatic',
  'sedan',
  'Silver',
  28000.00,
  45.00,
  'both',
  'Nairobi, Kenya',
  ARRAY['GPS', 'AC', 'Bluetooth', 'Backup Camera'],
  ARRAY['/placeholder.svg?height=300&width=400']
WHERE NOT EXISTS (SELECT 1 FROM public.cars LIMIT 1);

INSERT INTO public.cars (
  owner_id, title, description, brand, model, year, mileage, fuel_type, 
  transmission, body_type, color, price_rent_daily, price_rent_weekly,
  availability_type, location, features, images
) 
SELECT 
  (SELECT id FROM public.profiles LIMIT 1),
  'Honda CR-V 2023 - Premium SUV Rental',
  'Spacious and comfortable SUV perfect for family trips and adventures.',
  'Honda',
  'CR-V',
  2023,
  8000,
  'petrol',
  'automatic',
  'suv',
  'White',
  65.00,
  400.00,
  'rent',
  'Mombasa, Kenya',
  ARRAY['GPS', 'AC', 'Bluetooth', 'All-Wheel Drive', 'Sunroof'],
  ARRAY['/placeholder.svg?height=300&width=400']
WHERE NOT EXISTS (SELECT 1 FROM public.cars WHERE model = 'CR-V');

INSERT INTO public.cars (
  owner_id, title, description, brand, model, year, mileage, fuel_type, 
  transmission, body_type, color, price_sale,
  availability_type, location, features, images
) 
SELECT 
  (SELECT id FROM public.profiles LIMIT 1),
  'BMW X5 2021 - Luxury SUV for Sale',
  'Premium luxury SUV with advanced features and exceptional performance.',
  'BMW',
  'X5',
  2021,
  25000,
  'petrol',
  'automatic',
  'suv',
  'Black',
  55000.00,
  'sale',
  'Kisumu, Kenya',
  ARRAY['GPS', 'AC', 'Bluetooth', 'Leather Seats', 'Premium Sound', 'Panoramic Roof'],
  ARRAY['/placeholder.svg?height=300&width=400']
WHERE NOT EXISTS (SELECT 1 FROM public.cars WHERE model = 'X5');
