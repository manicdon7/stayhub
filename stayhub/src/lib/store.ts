import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SearchFilters, PropertyType, Amenity } from './types';
import { DateRange } from 'react-day-picker';

interface FilterState {
  location: string;
  dateRange: DateRange | undefined;
  guests: {
    adults: number;
    children: number;
    infants: number;
    pets: number;
  };
  priceRange: {
    min: number;
    max: number;
  };
  selectedPropertyTypes: PropertyType[];
  selectedAmenities: Amenity[];
  instantBook: boolean;
  superhost: boolean;
  setLocation: (location: string) => void;
  setDateRange: (dateRange: DateRange | undefined) => void;
  setGuests: (guests: { adults: number; children: number; infants: number; pets: number }) => void;
  setPriceRange: (priceRange: { min: number; max: number }) => void;
  setPropertyTypes: (propertyTypes: PropertyType[]) => void;
  togglePropertyType: (propertyType: PropertyType) => void;
  setAmenities: (amenities: Amenity[]) => void;
  toggleAmenity: (amenity: Amenity) => void;
  setInstantBook: (instantBook: boolean) => void;
  setSuperhost: (superhost: boolean) => void;
  resetFilters: () => void;
  getTotalGuests: () => number;
}

const initialState = {
  location: '',
  dateRange: undefined,
  guests: {
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  },
  priceRange: {
    min: 0,
    max: 1000,
  },
  selectedPropertyTypes: [] as PropertyType[],
  selectedAmenities: [] as Amenity[],
  instantBook: false,
  superhost: false,
};

export const useFilterStore = create<FilterState>()(
  persist(
    (set, get) => ({
      ...initialState,
      setLocation: (location) => set({ location }),
      setDateRange: (dateRange) => set({ dateRange }),
      setGuests: (guests) => set({ guests }),
      setPriceRange: (priceRange) => set({ priceRange }),
      setPropertyTypes: (propertyTypes) => set({ selectedPropertyTypes: propertyTypes }),
      togglePropertyType: (propertyType) => {
        const currentTypes = get().selectedPropertyTypes;
        const isSelected = currentTypes.includes(propertyType);

        if (isSelected) {
          set({
            selectedPropertyTypes: currentTypes.filter(type => type !== propertyType)
          });
        } else {
          set({
            selectedPropertyTypes: [...currentTypes, propertyType]
          });
        }
      },
      setAmenities: (amenities) => set({ selectedAmenities: amenities }),
      toggleAmenity: (amenity) => {
        const currentAmenities = get().selectedAmenities;
        const isSelected = currentAmenities.includes(amenity);

        if (isSelected) {
          set({
            selectedAmenities: currentAmenities.filter(a => a !== amenity)
          });
        } else {
          set({
            selectedAmenities: [...currentAmenities, amenity]
          });
        }
      },
      setInstantBook: (instantBook) => set({ instantBook }),
      setSuperhost: (superhost) => set({ superhost }),
      resetFilters: () => set(initialState),
      getTotalGuests: () => {
        const { adults, children } = get().guests;
        return adults + children;
      },
    }),
    {
      name: 'stayhub-filters',
    }
  )
);

// Wishlist store
interface WishlistState {
  wishlist: string[]; // Array of property IDs
  addToWishlist: (propertyId: string) => void;
  removeFromWishlist: (propertyId: string) => void;
  isInWishlist: (propertyId: string) => boolean;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlist: [],
      addToWishlist: (propertyId) => {
        const currentWishlist = get().wishlist;
        if (!currentWishlist.includes(propertyId)) {
          set({ wishlist: [...currentWishlist, propertyId] });
        }
      },
      removeFromWishlist: (propertyId) => {
        const currentWishlist = get().wishlist;
        set({
          wishlist: currentWishlist.filter(id => id !== propertyId)
        });
      },
      isInWishlist: (propertyId) => {
        return get().wishlist.includes(propertyId);
      },
    }),
    {
      name: 'stayhub-wishlist',
    }
  )
);

// View setting store (grid/list/map view)
interface ViewState {
  view: 'grid' | 'list' | 'map';
  setView: (view: 'grid' | 'list' | 'map') => void;
}

export const useViewStore = create<ViewState>((set) => ({
  view: 'grid',
  setView: (view) => set({ view }),
}));
