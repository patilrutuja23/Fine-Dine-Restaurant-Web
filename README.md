# Fine Dine - Restaurant Reservation System

A modern, full-stack restaurant reservation system built with React, Node.js/Express, and MongoDB.

## Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- Validator.js for input validation
- CORS for cross-origin requests
- Dotenv for environment variables

**Frontend:**
- React 19
- React Router v7
- Axios for HTTP requests
- React Hot Toast for notifications
- React Icons for icons
- Vite as build tool

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
```bash
cd Restaurant_web/backend
```

2. Install dependencies:
```bash
npm install
```

3. Ensure MongoDB is running on your machine (default: `localhost:27017`)

4. Start the backend server:
```bash
npm start
```

The server will run on `http://localhost:4000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd Restaurant_web/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Configure the API URL in `.env.local`:
```
VITE_API_URL=http://localhost:4000
```

4. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5174` (or next available port)

## Features

### Landing Page
- Beautiful hero section with call-to-action
- Navigation bar with smooth scrolling
- Responsive design for all devices

### Menu Section
- Display all restaurant dishes
- Filter by category (Breakfast, Lunch, Dinner)
- Image gallery with hover effects

### About Section
- Restaurant information and story
- Company values and philosophy

### Qualities Section
- Showcase restaurant strengths
- Quality food, super taste, fast service

### Team Section
- Display team members
- Roles and specialties

### Reservation System
- User-friendly booking form
- Real-time form validation
- Integrated with backend API
- Success confirmation page


## Reservation
- Form validation
- Email and phone number validation
- Date and time selection
- API integration with success handling
- Toast notifications for feedback



## Form Validation Rules

- **First Name:** 3-30 characters
- **Last Name:** 3-30 characters
- **Email:** Valid email format
- **Phone:** Exactly 10 digits
- **Date:** Required, future dates only
- **Time:** Required, time format (HH:MM)


## Future Enhancements

- User authentication and account management
- Online payment integration
- Table availability calendar
- Email confirmation system
- Admin dashboard for reservations
- Review and rating system
- Special dietary requirements
- Multiple location support





**Happy Dining! 🍽️**
