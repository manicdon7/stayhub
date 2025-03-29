export type PropertyType =
  | 'entire_home'
  | 'private_room'
  | 'shared_room'
  | 'hotel_room'
  | 'apartment'
  | 'house'
  | 'cabin'
  | 'villa'
  | 'castle'
  | 'treehouse'
  | 'boat'
  | 'camper'
  | 'bungalow'
  | 'condo'
  | 'ryokan'
  | 'cottage'
  | 'mansion'
  | 'hut';

export type Amenity =
  | 'wifi'
  | 'tv'
  | 'kitchen'
  | 'washer'
  | 'dryer'
  | 'ac'
  | 'heating'
  | 'pool'
  | 'hot_tub'
  | 'free_parking'
  | 'gym'
  | 'breakfast'
  | 'workspace'
  | 'pets_allowed'
  | 'smoking_allowed'
  | 'beachfront'
  | 'waterfront'
  | 'ski_in_out';

export type CategoryType =
  | 'trending'
  | 'beachfront'
  | 'amazing_views'
  | 'cabins'
  | 'castles'
  | 'countryside'
  | 'design'
  | 'boats'
  | 'tropical'
  | 'skiing'
  | 'mansions'
  | 'luxury'
  | 'waterfront';

export interface Location {
  city: string;
  state?: string;
  country: string;
  address?: string;
  lat: number;
  lng: number;
}

export interface Host {
  id: string;
  name: string;
  avatar: string;
  joinDate: string;
  superhost: boolean;
  responseRate?: number;
  responseTime?: string;
  bio?: string;
}

export interface PriceInfo {
  basePrice: number;
  cleaningFee?: number;
  serviceFee?: number;
  total: number;
  currency: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface PropertyImage {
  id: string;
  url: string;
  caption?: string;
  isPrimary?: boolean;
}

export interface PropertyListing {
  id: string;
  title: string;
  description: string;
  host: Host;
  location: Location;
  images: PropertyImage[];
  price: PriceInfo;
  propertyType: PropertyType;
  category: CategoryType[];
  amenities: Amenity[];
  maxGuests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  rating: number;
  reviewCount: number;
  reviews?: Review[];
  availableDates?: string[];
  instantBook: boolean;
  superhost: boolean;
  featured?: boolean;
}

export interface DateRange {
  from?: Date;
  to?: Date;
}

export interface SearchFilters {
  location?: string;
  checkIn?: Date;
  checkOut?: Date;
  guests?: {
    adults: number;
    children: number;
    infants: number;
    pets: number;
  };
  priceRange?: {
    min: number;
    max: number;
  };
  propertyTypes?: PropertyType[];
  amenities?: Amenity[];
  instantBook?: boolean;
  superhost?: boolean;
}

export interface Booking {
  id: string;
  propertyId: string;
  userId: string;
  checkIn: string;
  checkOut: string;
  guests: {
    adults: number;
    children: number;
    infants: number;
    pets: number;
  };
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  bookings?: Booking[];
  wishlists?: Wishlist[];
}

export interface Wishlist {
  id: string;
  name: string;
  userId: string;
  properties: string[]; // property IDs
}
