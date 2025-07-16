# iOS Portfolio Website - Pradip Kikani

## Overview

This is a modern, responsive portfolio website for an iOS app developer built with React, TypeScript, and Express.js. The application showcases professional experience, skills, projects, and services with a clean, Apple-inspired design aesthetic. It features a contact form with database storage and PWA capabilities for mobile optimization.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack monorepo architecture with clear separation between frontend and backend concerns:

- **Frontend**: React SPA with TypeScript, using Vite as the build tool
- **Backend**: Express.js REST API with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for data management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Deployment**: Production-ready with esbuild bundling

## Key Components

### Frontend Architecture
- **React Router**: Uses `wouter` for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom iOS-inspired color palette
- **Forms**: React Hook Form with Zod validation
- **PWA Features**: Service worker, manifest.json, and offline capabilities

### Backend Architecture
- **API Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL adapter (@neondatabase/serverless)
- **Validation**: Zod schemas for type-safe data validation
- **Session Management**: Express sessions with PostgreSQL store
- **Error Handling**: Centralized error middleware with proper HTTP status codes

### Component Structure
```
client/src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui base components
│   ├── About.tsx       # About section component
│   ├── Contact.tsx     # Contact form with API integration
│   ├── Experience.tsx  # Professional timeline
│   ├── Hero.tsx        # Landing section
│   ├── Navigation.tsx  # Responsive navigation
│   ├── Projects.tsx    # Portfolio showcase
│   ├── Services.tsx    # Service offerings
│   ├── Skills.tsx      # Technical skills grid
│   └── Testimonials.tsx # Client testimonials
├── pages/              # Route components
├── hooks/              # Custom React hooks
└── lib/                # Utilities and configurations
```

## Data Flow

### Contact Form Submission
1. User fills out contact form with validation
2. Form data validated using Zod schemas
3. POST request to `/api/contact` endpoint
4. Data persisted to PostgreSQL database via Drizzle ORM
5. Success/error feedback shown to user via toast notifications

### Data Schema
```typescript
// Contact form structure
{
  name: string
  email: string
  projectType: string
  budgetRange: string
  message: string
  createdAt: timestamp
}
```

### Storage Implementation
- **Production**: PostgreSQL database with Drizzle ORM
- **Development**: In-memory storage for rapid development
- **Database Migrations**: Managed through Drizzle Kit

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with hooks and modern patterns
- **TypeScript**: Type safety across the entire application
- **Express.js**: Backend API server
- **Drizzle ORM**: Type-safe database queries and migrations

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library

### Database and Validation
- **PostgreSQL**: Primary database (via Neon serverless)
- **Zod**: Runtime type validation
- **connect-pg-simple**: PostgreSQL session store

### Development Tools
- **Vite**: Fast development server and build tool
- **esbuild**: Production bundling for backend
- **PostCSS**: CSS processing
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets
2. **Backend Build**: esbuild bundles Express server with dependencies
3. **Database**: Drizzle migrations applied to production database

### Production Architecture
```
dist/
├── public/          # Static frontend assets
└── index.js         # Bundled Express server
```

### Environment Configuration
- **Development**: Local development with hot reloading
- **Production**: Optimized builds with error handling
- **Database**: Environment-specific connection strings

### PWA Features
- **Service Worker**: Caches static assets and API responses
- **Manifest**: Native app-like installation on mobile devices
- **Offline Support**: Graceful degradation when network unavailable

### Performance Optimizations
- **Code Splitting**: Automatic chunking via Vite
- **Image Optimization**: Lazy loading and responsive images
- **Bundle Analysis**: Minimal dependencies and tree shaking
- **Caching Strategy**: Service worker with cache-first approach

The application is designed to be easily deployable to various platforms (Vercel, Netlify, Railway) with minimal configuration changes, following modern web development best practices for performance, accessibility, and user experience.