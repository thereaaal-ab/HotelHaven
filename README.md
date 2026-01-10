# Luxury Haven Hotel - Modern React Website

A modern, fully responsive single-page application for Luxury Haven Hotel built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Modern Design**: Clean, elegant UI with smooth animations
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- 🌙 **Dark Mode**: Toggle between light and dark themes
- ♿ **Accessible**: ARIA attributes and semantic HTML
- 🚀 **Performance**: Lazy loading images and optimized assets
- 🔍 **SEO-Friendly**: Meta tags and structured data (JSON-LD)
- 🎨 **Animations**: Smooth transitions using Framer Motion
- 📅 **Reservation System**: Functional booking form with validation
- 🛠️ **Admin Dashboard**: View and manage all reservations with filtering and status updates

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form handling and validation
- **React Datepicker** - Date selection component
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
hotel/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation with smooth scroll
│   │   ├── Hero.jsx         # Full-screen hero section
│   │   ├── About.jsx        # About us section
│   │   ├── Services.jsx     # Services grid
│   │   ├── Reservation.jsx  # Booking form
│   │   └── Footer.jsx       # Footer with contact info
│   ├── pages/
│   │   ├── HomePage.jsx     # Main homepage
│   │   └── AdminDashboard.jsx # Admin dashboard for reservations
│   ├── contexts/
│   │   ├── DarkModeContext.jsx      # Dark mode state management
│   │   └── ReservationsContext.jsx   # Reservations state management
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Sections

1. **Hero Section**: Full-screen banner with hotel name, tagline, and CTA button
2. **About Us**: Hotel history and mission with side-by-side layout
3. **Services**: Grid showcasing amenities (dining, rooms, spa, gym, pool, events)
4. **Reservation**: Functional booking form with date picker and validation
5. **Footer**: Contact information and social links
6. **Admin Dashboard** (`/admin`): View all reservations, filter by status, search, and manage bookings

## Admin Dashboard

The admin dashboard provides a comprehensive interface to manage hotel reservations:

- **View All Reservations**: See all bookings in a clean, organized table
- **Status Management**: Update reservation status (Pending, Confirmed, Cancelled)
- **Search & Filter**: Search by name, email, or room type; filter by status
- **Statistics**: Quick overview of reservation counts by status
- **Delete Reservations**: Remove bookings with confirmation
- **Responsive Design**: Works seamlessly on all devices

Access the admin dashboard by clicking the "Admin" link in the navigation bar or navigating to `/admin`.

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: { /* ... */ },
  luxury: {
    gold: '#d4af37',
    dark: '#1a1a1a',
  }
}
```

### Images

Replace placeholder images from Unsplash with your own:
- Hero: `src/components/Hero.jsx`
- About: `src/components/About.jsx`
- Services: `src/components/Services.jsx`

### Content

Update text content in each component file:
- Hotel name, tagline, descriptions
- Contact information in Footer
- Service descriptions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demonstration purposes.

