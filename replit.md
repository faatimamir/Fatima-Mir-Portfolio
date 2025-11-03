# Fatima Mir - AI Engineer Portfolio

## Overview

This is a personal portfolio website for Fatima Mir, an AI Engineer specializing in deep learning, computer vision, NLP, and RAG systems. The portfolio showcases professional experience, AI/ML projects, technical articles, skills, education, and contact information. Built as a single-page application with a modern, clean design inspired by developer portfolios like Linear and Vercel.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (single-page app with home and 404 pages)

**UI Component System**
- Shadcn UI component library (New York style variant) with Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Component architecture follows atomic design principles with reusable UI components
- Design system defined in `design_guidelines.md` with typography hierarchy, spacing primitives, and layout patterns

**State Management**
- TanStack Query (React Query) for server state and data fetching
- Local component state with React hooks for UI interactions
- Toast notifications for user feedback via custom toast hook

**Styling Approach**
- Custom CSS variables for theming (light/dark mode support)
- Tailwind configuration with extended color palette and custom utilities
- Responsive design with mobile-first approach
- Custom hover and active states via utility classes (`hover-elevate`, `active-elevate-2`)

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- HTTP server creation with built-in routing structure
- Development and production build modes via esbuild

**API Design**
- RESTful API pattern with `/api` prefix for all application routes
- Structured route registration system in `server/routes.ts`
- Request/response logging middleware for API endpoints
- JSON body parsing with raw body capture for webhook support

**Development Experience**
- Vite middleware integration for HMR in development
- Custom logging with timestamps and request duration tracking
- Replit-specific plugins for development (cartographer, dev banner, runtime error overlay)

**Storage Layer**
- In-memory storage implementation (`MemStorage`) as the default storage interface
- Abstracted storage interface (`IStorage`) for easy swapping to database implementations
- User management methods (CRUD operations) defined in storage interface
- Designed to be database-agnostic with interface-based architecture

### Data Schema & Validation

**Database Schema**
- Drizzle ORM for type-safe database operations
- PostgreSQL dialect configuration (ready for Neon Database integration)
- User table schema with UUID primary keys and unique username constraints
- Schema-first approach with Zod validation for type safety

**Type Safety**
- Drizzle Zod integration for automatic schema-to-validator generation
- Shared types between frontend and backend via `shared/schema.ts`
- TypeScript strict mode enabled across the codebase

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Headless UI primitives for accessible components (dialogs, dropdowns, tooltips, etc.)
- **Shadcn UI**: Pre-built component library built on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel/slider functionality

### State & Data Management
- **TanStack Query v5**: Server state management and data fetching
- **React Hook Form**: Form state management with validation
- **Zod**: Runtime type validation and schema definition

### Database & ORM
- **Drizzle ORM**: Type-safe ORM for database operations
- **Neon Database Serverless**: PostgreSQL database driver for serverless environments
- **Drizzle Kit**: Database migration and schema management tooling

### Styling & UI Utilities
- **Tailwind CSS**: Utility-first CSS framework
- **Class Variance Authority**: Utility for creating variant-based component APIs
- **clsx & tailwind-merge**: Utility for merging Tailwind classes

### Build & Development Tools
- **Vite**: Frontend build tool and dev server
- **esbuild**: JavaScript bundler for production builds
- **TypeScript**: Static type checking
- **PostCSS & Autoprefixer**: CSS processing

### Fonts
- **Google Fonts**: Inter (headings and body), JetBrains Mono (code/technical tags)
- **Geist Mono**: Monospace font alternative
- **Architects Daughter, DM Sans, Fira Code**: Additional font options

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development environment banner

### Session Management
- **connect-pg-simple**: PostgreSQL session store for Express (configured but not actively used with current in-memory storage)

### Utilities
- **date-fns**: Date formatting and manipulation
- **nanoid**: Unique ID generation
- **cmdk**: Command menu component