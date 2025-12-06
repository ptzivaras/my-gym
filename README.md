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

**Design**
- Responsive layout that works on mobile and desktop
- Clean component-based structure
- Custom CSS styling throughout

## Tech Stack

**Core**
- React 18.2.0 with functional components
- React Router DOM v6 for multi-page navigation
- React Hooks (useState for schedule selection, useEffect for maps)

**UI & Styling**
- Custom CSS for all components
- Material-UI Icons only (only icons)
- Bootstrap 5 for grid layout
- FontAwesome icons
- React Icons

**Other Libraries**
- Google Maps API & Leaflet for location maps
- React Multi Carousel for testimonials
- React YouTube for embedding videos

## What I Learned

- Building multi-page React apps with React Router
- State management with useState hook
- Component composition and reusability
- Responsive design with CSS
- Integrating third-party libraries (maps, carousels)
- Project organization and folder structure

## Project Structure

```
my-gym/
├── src/
│   ├── Components/         # Reusable components
│   │   ├── NavBar/        # Navigation bar
│   │   ├── Header/        # Hero section
│   │   ├── Footer/        # Footer
│   │   ├── GymSchedule/   # Weekly class schedule
│   │   ├── Membership/    # Pricing tables
│   │   ├── CardGrid/      # Grid layout for cards
│   │   ├── Testimonials/  # Customer reviews
│   │   └── ...            # Other components
│   ├── Routes/            # Page components
│   │   ├── Home/         
│   │   ├── About/        
│   │   ├── Classes/      
│   │   ├── Trainers/     
│   │   └── Price/        
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

### High Priority
- [ ] **Make site fully customizable** - Add config file for gym name, colors, images
- [ ] **Admin panel** - Let gym owners update schedule, prices, trainers without code changes
- [ ] **Working BMI calculator** - Currently just has the component shell
- [ ] **Backend integration** - Connect to actual database for dynamic content
- [ ] **Contact form** - Add working contact/inquiry form with email integration
- [ ] **Member login system** - Authentication for existing members
- [ ] **Online booking** - Book classes or trainer sessions
- [ ] **Payment integration** - Stripe/PayPal for membership purchase
- [ ] **Gallery** - Photo gallery of gym facilities
- [ ] **Blog section** - Fitness tips and gym news
- [ ] **Mobile app version** - React Native conversion

###  Nice to Have
- [ ] **Dark mode** - Theme toggle
- [ ] **Multi-language support** -  Greek/English
- [ ] **Social media integration** - Live Instagram feed
- [ ] **Progress tracking** - Member workout/progress dashboard
- [ ] **Class reviews** - Let members rate and review classes
- [ ] **Nutrition plans** - Add nutrition program section
- [ ] **Live chat** - Customer support chat widget.. AI ChatBot

###  Improvements
- [ ] **TypeScript migration** - Add type safety
- [ ] **Testing** - Unit and integration tests
- [ ] **Performance optimization** - Code splitting, lazy loading
- [ ] **SEO optimization** - Meta tags, sitemap, schema markup
- [ ] **Accessibility improvements** - ARIA labels, keyboard navigation
- [ ] **State management** - Consider Context API or Redux if app grows
- [ ] **Form validation** - Add proper validation library

---

Built with Create React App

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
