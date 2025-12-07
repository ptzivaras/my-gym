# My Gym - React Fitness Website

A modern gym website built with React to help fitness centers have an online presence. I built this to solve the problem of gyms not having good websites - most either don't have one or use terrible generic apps.

## The Problem

I noticed that most gyms struggle with their online presence:
- They either have no website at all, or pay for expensive generic solutions
- Potential members can't easily check class schedules or pricing before visiting
- Every gym app I've seen is overcomplicated and poorly designed
- No way to see trainers or programs without calling or visiting in person

## My Solution

I built a clean, responsive website where potential gym members can:
- Browse class schedules and see what's available each day
- Check out trainers and their specializations
- View membership pricing for different programs and durations
- Learn about different fitness programs (Muay Thai, CrossFit, TRX, etc.)
- Get all the information they need before deciding to visit

The site is built with reusable components, so it's easy to customize for any gym.

## Features

**Pages**
- Home page with gym overview and highlights
- About page with location info
- Trainers page showcasing coaches
- Classes page with program details
- Pricing page with membership options

**Interactive Components**
- Weekly class schedule - shows times, classes, and trainers for each day
- Trainer cards with photos and descriptions
- Membership pricing tables with 1, 3, 6, and 12 month options
- Program showcase (Muay Thai, Kickboxing, MMA, CrossFit, TRX, Personal Training)
- Testimonials section
- Maps integration for location
- **BMI Calculator** - Calculate Body Mass Index with feedback and health recommendations
- **Contact Form** - Contact form with validation and success feedback (mock submission)
- **Photo Gallery** - Image gallery with lightbox zoom feature for gym facilities
- **FAQ Section** - Accordion-style frequently asked questions
- **Success Stories** - Before/after transformation stories with member testimonials
- **Dark Mode Toggle** - Theme switcher with localStorage persistence
- **Scroll to Top Button** - Smooth scroll navigation button
- **Loading Animations** - Spinner and skeleton loaders for better UX

**Design**
- Fully responsive layout that works on mobile, tablet, and desktop
- Dark mode support with smooth transitions
- Clean component-based structure
- Custom CSS styling throughout
- Smooth animations and hover effects
- Modern gradient backgrounds
- Accessibility-friendly navigation with active states

## Tech Stack

**Core**
- React 18.2.0 with functional components
- React Router DOM v6 for multi-page navigation
- React Hooks (useState, useEffect)

**UI & Styling**
- Custom CSS for all components
- Material-UI Icons (@mui/icons-material)
- React Icons (IoClose, IoChevronDown, IoArrowUp, etc.)
- Bootstrap 5 for grid layout
- CSS animations and transitions

**Other Libraries**
- Google Maps iframe embed for location
- EmailJS library for contact form integration (optional)
- LocalStorage for dark mode persistence

## What I Learned

- Building multi-page React apps with React Router (NavLink for active states)
- State management with useState and useEffect hooks
- Component composition and reusability
- Creating modal overlays and lightbox effects
- Implementing accordion components with smooth animations
- Building responsive layouts with CSS Grid and Flexbox
- Dark mode implementation with CSS variables and localStorage
- Form handling with validation and user feedback
- Integrating third-party libraries (Google Maps, EmailJS)
- Project organization and scalable folder structure
- Working with mock data for prototyping

## Project Structure

```
my-gym/
├── src/
│   ├── Components/         # Reusable components
│   │   ├── NavBar/        # Navigation bar with active states
│   │   ├── Header/        # Hero section
│   │   ├── Footer/        # Footer
│   │   ├── GymSchedule/   # Weekly class schedule
│   │   ├── Membership/    # Pricing tables
│   │   ├── CalculateBMI/  # BMI calculator
│   │   ├── ContactForm/   # Contact form
│   │   ├── Gallery/       # Photo gallery with lightbox
│   │   ├── FAQ/           # Accordion FAQ section
│   │   ├── SuccessStories/ # Transformation stories
│   │   ├── DarkModeToggle/ # Theme switcher
│   │   ├── ScrollToTop/   # Scroll button
│   │   ├── LoadingSpinner/ # Loading animations
│   │   ├── SkeletonLoader/ # Skeleton screens
│   │   ├── LocationContact/ # Map and contact info
│   │   ├── Testimonials/  # Customer reviews
│   │   └── ...            # Other components
│   ├── Routes/            # Page components
│   │   ├── Home/         
│   │   ├── About/         # With BMI calculator
│   │   ├── Classes/      
│   │   ├── Trainers/     
│   │   ├── Price/
│   │   └── Contact/       # Contact form page
│   ├── App.js            # Main app with routing
│   └── index.js          # Entry point
└── package.json
```

## Setup

1. Clone the repo
   ```bash
   git clone https://github.com/ptzivaras/my-gym.git
   cd my-gym
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm start` - Run development server
- `npm build` - Create production build
- `npm test` - Run tests

## TODO - Future Improvements

### Important
- [ ] **Make site fully customizable** - Add config file for gym name, colors, images
- [ ] **Admin panel** - Let gym owners update schedule, prices, trainers without code changes
- [ ] **Backend integration** - Connect to actual database for dynamic content
- [ ] **Member login system** - Authentication for existing members
- [ ] **Online booking** - Book classes or trainer sessions
- [ ] **Payment integration** - Stripe/PayPal for membership purchase

### Nice to Have
- [ ] **Multi-language support** - Greek/English
- [ ] **Social media integration** - Live Instagram feed
- [ ] **Progress tracking** - Member workout/progress dashboard
- [ ] **Class reviews** - Let members rate and review classes
- [ ] **Nutrition plans** - Add nutrition program section
- [ ] **Live chat** - Customer support chat widget
- [ ] **Blog section** - Fitness tips and gym news
- [ ] **Mobile app version** - React Native conversion

### Technical Improvements
- [ ] **TypeScript migration** - Add type safety
- [ ] **Testing** - Unit and integration tests
- [ ] **Performance optimization** - Code splitting, lazy loading
- [ ] **SEO optimization** - Meta tags, sitemap, schema markup
- [ ] **Accessibility improvements** - ARIA labels, keyboard navigation
- [ ] **State management** - Consider Context API or Redux if app grows
- [ ] **Form validation library** - Add Formik or React Hook Form

---

Built with Create React App
