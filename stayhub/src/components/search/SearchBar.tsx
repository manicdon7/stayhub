"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Search, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { DateRange } from 'react-day-picker';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { useFilterStore } from '@/lib/store';
import { cn } from '@/lib/utils';

const SearchBar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>('location');
  const [location, setLocation] = useState<string>('');
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isGuestSelectorOpen, setIsGuestSelectorOpen] = useState(false);

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const totalGuests = adults + children;

  // Popular destinations for suggestions
  const popularDestinations = [
    { name: 'London', country: 'United Kingdom' },
    { name: 'Paris', country: 'France' },
    { name: 'New York', country: 'United States' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Barcelona', country: 'Spain' },
    { name: 'Sydney', country: 'Australia' },
  ];

  const handleSearch = () => {
    // Use the filter store to save search parameters
    useFilterStore.getState().setLocation(location);
    useFilterStore.getState().setDateRange(dateRange);
    useFilterStore.getState().setGuests({
      adults,
      children,
      infants,
      pets,
    });

    // Navigate to search results page
    router.push('/search');
  };

  const incrementGuest = (type: 'adults' | 'children' | 'infants' | 'pets') => {
    switch (type) {
      case 'adults':
        setAdults(prev => prev + 1);
        break;
      case 'children':
        setChildren(prev => prev + 1);
        break;
      case 'infants':
        setInfants(prev => prev + 1);
        break;
      case 'pets':
        setPets(prev => prev + 1);
        break;
    }
  };

  const decrementGuest = (type: 'adults' | 'children' | 'infants' | 'pets') => {
    switch (type) {
      case 'adults':
        setAdults(prev => (prev > 0 ? prev - 1 : 0));
        break;
      case 'children':
        setChildren(prev => (prev > 0 ? prev - 1 : 0));
        break;
      case 'infants':
        setInfants(prev => (prev > 0 ? prev - 1 : 0));
        break;
      case 'pets':
        setPets(prev => (prev > 0 ? prev - 1 : 0));
        break;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Tabs
        defaultValue="location"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="bg-white rounded-full overflow-hidden shadow-md border border-gray-200">
          <TabsList className="w-full grid grid-cols-3 p-1 h-auto bg-transparent">
            <TabsTrigger
              value="location"
              className="flex flex-col items-start py-3 px-6 data-[state=active]:bg-transparent"
            >
              <span className="text-sm font-medium">Where</span>
              <span className="text-sm text-gray-500 truncate">
                {location ? location : 'Search destinations'}
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="dates"
              className="flex flex-col items-start py-3 px-6 data-[state=active]:bg-transparent border-l border-r border-gray-200"
            >
              <span className="text-sm font-medium">When</span>
              <span className="text-sm text-gray-500">
                {dateRange?.from && dateRange?.to
                  ? `${format(dateRange.from, 'MMM d')} - ${format(dateRange.to, 'MMM d')}`
                  : 'Add dates'}
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="guests"
              className="flex flex-col items-start py-3 px-6 data-[state=active]:bg-transparent"
            >
              <span className="text-sm font-medium">Who</span>
              <span className="text-sm text-gray-500">
                {totalGuests > 0 ? `${totalGuests} guest${totalGuests !== 1 ? 's' : ''}` : 'Add guests'}
              </span>
            </TabsTrigger>
          </TabsList>

          <motion.div
            className="flex items-center justify-end p-2 pr-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Button
              onClick={handleSearch}
              className="rounded-full bg-orange-500 hover:bg-orange-600 text-white px-6"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </motion.div>
        </div>

        <div className="mt-2">
          <TabsContent value="location" className="mt-2">
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <Input
                type="text"
                placeholder="Search destinations"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mb-4"
                autoFocus
              />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Popular destinations</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {popularDestinations.map((destination) => (
                    <motion.button
                      key={destination.name}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 border border-gray-200 text-left"
                      onClick={() => {
                        setLocation(destination.name);
                        setActiveTab('dates');
                      }}
                    >
                      <div className="p-2 bg-gray-100 rounded-lg mr-3">
                        <MapPin className="h-4 w-4 text-gray-500" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{destination.name}</div>
                        <div className="text-xs text-gray-500">{destination.country}</div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="dates" className="mt-2">
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !dateRange?.from && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange?.from && dateRange?.to ? (
                      <>
                        {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                      </>
                    ) : (
                      <span>Select your dates</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={dateRange?.from}
                    selected={dateRange}
                    onSelect={(range) => {
                      setDateRange(range);
                      if (range?.to) {
                        setActiveTab('guests');
                      }
                    }}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </TabsContent>

          <TabsContent value="guests" className="mt-2">
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <Popover open={isGuestSelectorOpen} onOpenChange={setIsGuestSelectorOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    {totalGuests > 0 ? (
                      <span>
                        {totalGuests} guest{totalGuests !== 1 ? 's' : ''}
                        {infants > 0 ? `, ${infants} infant${infants !== 1 ? 's' : ''}` : ''}
                        {pets > 0 ? `, ${pets} pet${pets !== 1 ? 's' : ''}` : ''}
                      </span>
                    ) : (
                      <span>Add guests</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80" align="start">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Adults</div>
                        <div className="text-sm text-gray-500">Age 13+</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => decrementGuest('adults')}
                          disabled={adults === 0}
                        >
                          -
                        </Button>
                        <span className="w-4 text-center">{adults}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => incrementGuest('adults')}
                        >
                          +
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Children</div>
                        <div className="text-sm text-gray-500">Ages 2-12</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => decrementGuest('children')}
                          disabled={children === 0}
                        >
                          -
                        </Button>
                        <span className="w-4 text-center">{children}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => incrementGuest('children')}
                        >
                          +
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Infants</div>
                        <div className="text-sm text-gray-500">Under 2</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => decrementGuest('infants')}
                          disabled={infants === 0}
                        >
                          -
                        </Button>
                        <span className="w-4 text-center">{infants}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => incrementGuest('infants')}
                        >
                          +
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Pets</div>
                        <div className="text-sm text-gray-500">Bringing a service animal?</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => decrementGuest('pets')}
                          disabled={pets === 0}
                        >
                          -
                        </Button>
                        <span className="w-4 text-center">{pets}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => incrementGuest('pets')}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default SearchBar;
