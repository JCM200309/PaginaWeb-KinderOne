# Kinder One Belgrano

## Overview
A Next.js 16 website for Kinder One Belgrano, a kindergarten located in Belgrano, Buenos Aires. The site showcases the school's offerings for children ages 0-3 with information about facilities, programs, and enrollment.

## Tech Stack
- **Framework**: Next.js 16.0.10 with React 19
- **Styling**: TailwindCSS 4.1.9 with Tailwind Animate
- **UI Components**: Radix UI primitives, shadcn/ui components
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Animations**: Motion library

## Project Structure
```
app/           - Next.js App Router pages and layouts
components/    - React components and shadcn/ui components
lib/           - Utility functions
public/        - Static assets (images, icons)
styles/        - Global CSS styles
```

## Development
- **Dev Server**: `npm run dev -- -p 5000 -H 0.0.0.0`
- **Build**: `npm run build`
- **Start**: `npm run start`
- **Lint**: `npm run lint`

## Configuration
- Port 5000 for frontend
- TypeScript with strict mode
- All dev origins allowed for Replit proxy compatibility
