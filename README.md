# StayHub - An Airbnb Clone

StayHub is a modern, responsive web application that replicates the core functionality of Airbnb. Built with Next.js 14, React, TypeScript, and Tailwind CSS, it offers a seamless user experience for browsing, booking, and managing property listings.

![StayHub Screenshot](https://res.cloudinary.com/dvgpzftnf/image/upload/v1743245295/Screenshot_2025-03-29_161705_icvmzt.png)

## Features

- **Modern UI/UX**: Clean and responsive design that works across desktop, tablet, and mobile devices
- **Property Listings**: Browse through a variety of properties with detailed information
- **Search & Filters**: Find properties by location, dates, guests, and property types
- **User Authentication**: Complete login and registration functionality
- **User Profiles**: Manage your account, bookings, and saved properties
- **Booking System**: Select dates, number of guests, and complete the booking process
- **Wishlist**: Save favorite properties for later viewing
- **Host Dashboard**: For property owners to manage their listings and bookings
- **Responsive Design**: Optimized for all screen sizes

## Pages

- **Home**: Landing page showcasing featured properties and categories
- **Property Details**: View detailed information about a specific property
- **Search Results**: Display filtered properties based on search criteria
- **User Authentication**:
  - Login
  - Sign Up
  - Forgot Password
- **User Account**:
  - Profile Management
  - Bookings
  - Saved Properties
- **Booking**:
  - Booking Form
  - Booking Confirmation
- **Host**:
  - Dashboard
  - Create Listing
  - Manage Listings
- **Legal**:
  - Terms of Service
  - Privacy Policy
  - Cancellation Policy
- **Error Pages**:
  - 404 Not Found

## Tech Stack

- **Frontend**:
  - Next.js 14 (App Router)
  - React 18
  - TypeScript
  - Tailwind CSS
  - Lucide React (Icons)
  - Next.js Image Optimization

- **Styling**:
  - Tailwind CSS for utility-first styling
  - Custom components built on Tailwind

- **State Management**:
  - React Hooks for local state
  - Context API for global state

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/manicdon7/stayhub.git
cd stayhub
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
stayhub/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js app router pages
│   ├── components/     # Reusable React components
│   │   ├── layout/     # Layout components (Header, Footer, etc.)
│   │   ├── ui/         # UI components (Buttons, Cards, etc.)
│   │   └── ...         # Other component categories
│   ├── lib/            # Utilities, hooks, and helper functions
│   │   ├── types.ts    # TypeScript type definitions
│   │   └── mockData.ts # Mock data for development
│   └── styles/         # Global styles
└── ...                 # Config files (next.config.js, tsconfig.json, etc.)
```

## Future Enhancements

- Integration with a backend API
- User reviews and ratings
- Real-time messaging between guests and hosts
- Payment processing integration
- Advanced filtering options
- Map view for property locations
- Mobile app version

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Design inspired by Airbnb
- Icons from [Lucide React](https://lucide.dev/)
- Images from Unsplash and other free stock photo sites 