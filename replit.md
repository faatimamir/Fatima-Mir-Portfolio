# Fatima Mir - AI Engineer Portfolio

## Overview

This is a personal portfolio website for Fatima Mir, an AI Engineer specializing in deep learning, computer vision, NLP, and RAG systems. The portfolio showcases professional experience, AI/ML projects, technical articles, skills, education, and contact information. Built as a single-page application with a modern, clean design inspired by developer portfolios like Linear and Vercel.

**Architecture**: Frontend-only static site optimized for Vercel deployment

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (single-page app with home and 404 pages)
- No backend server - completely static frontend application

**UI Component System**
- Shadcn UI component library (New York style variant) with Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Component architecture follows atomic design principles with reusable UI components
- Design system defined in `design_guidelines.md` with typography hierarchy, spacing primitives, and layout patterns

**State Management**
- TanStack Query (React Query) included for potential future data fetching needs
- Local component state with React hooks for UI interactions
- Toast notifications for user feedback via custom toast hook
- All content is static and defined directly in components

**Styling Approach**
- Custom CSS variables for theming (light/dark mode support)
- Tailwind configuration with extended color palette and custom utilities
- Responsive design with mobile-first approach
- Custom hover and active states via utility classes (`hover-elevate`, `active-elevate-2`)

**Type Safety**
- TypeScript strict mode enabled across the codebase
- Type-safe component props and state management

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


### Styling & UI Utilities
- **Tailwind CSS**: Utility-first CSS framework
- **Class Variance Authority**: Utility for creating variant-based component APIs
- **clsx & tailwind-merge**: Utility for merging Tailwind classes

### Build & Development Tools
- **Vite**: Frontend build tool and dev server
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


### Utilities
- **date-fns**: Date formatting and manipulation
- **cmdk**: Command menu component

## Recent Changes

**November 3, 2025**: Converted from full-stack application to frontend-only static site
- Removed Express.js backend server and all backend dependencies
- Removed database layer (Drizzle ORM, PostgreSQL)
- Updated build configuration for static site deployment
- Optimized for Vercel deployment with simplified architecture
- Maintained all frontend features and design system