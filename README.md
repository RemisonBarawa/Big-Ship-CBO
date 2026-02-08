# Big Ship Organization - Modern Web Application

A modern, responsive web application for Big Ship Organization - a community empowerment organization focused on environmental conservation, waste management, and youth empowerment in Mombasa County, Kenya.

## Features

- 🎨 **Ultra-modern UI/UX** - Beautiful, clean design with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ⚡ **Fast Performance** - Built with Next.js 14 for optimal performance
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🌊 **Ocean & Nature Theme** - Color scheme reflecting environmental focus
- 📊 **Interactive Stats** - Animated counters showing organization impact
- 🎯 **Multiple Pages** - Home, About, Projects, Donate, and Contact pages

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── donate/         # Donate page
│   ├── projects/       # Projects page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   ├── Navbar.tsx      # Navigation bar
│   ├── Partners.tsx    # Partners section
│   ├── Programs.tsx    # Programs section
│   └── Results.tsx     # Results/Stats section
└── public/             # Static assets
```

## Pages

- **Home** (`/`) - Landing page with hero, programs, results, and partners
- **About** (`/about`) - Organization history and mission
- **Projects** (`/projects`) - Detailed project information
- **Donate** (`/donate`) - Donation form and options
- **Contact** (`/contact`) - Contact form and information

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme. The current theme uses:
- Ocean blue (`ocean-*`) for primary actions
- Green (`primary-*`) for environmental themes
- Various accent colors for different sections

### Content

All content can be easily updated in the respective page and component files.

## License

Copyright © Big Ship Organization. All Rights Reserved.



