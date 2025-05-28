# Evento - Event Management Platform

A modern event management platform built with Next.js, TypeScript, and Prisma. This project demonstrates the implementation of a full-stack web application with a focus on event management and organization.

## 🚀 Technologies Used

### Frontend

- **Next.js 15.3.2** - React framework for production
- **React 19** - JavaScript library for building user interfaces
- **TypeScript** - Static type checking
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI Icons** - Icon library
- **clsx & tailwind-merge** - Utility libraries for managing class names

### Backend

- **Next.js API Routes** - Server-side API endpoints
- **Prisma** - Next-generation ORM
- **PostgreSQL** - Relational database
- **Zod** - TypeScript-first schema validation

### Development Tools

- **ESLint** - Code linting
- **TypeScript** - Type checking
- **Turbopack** - Next.js development server
- **tsx** - TypeScript execution engine

## 📋 Project Structure

```
evento/
├── prisma/           # Database schema and migrations
├── public/           # Static assets
├── src/             # Source code
│   ├── app/         # Next.js app directory
│   ├── components/  # React components
│   └── lib/         # Utility functions
├── .next/           # Next.js build output
└── node_modules/    # Dependencies
```

## 🛠️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd evento
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with the following variables:

   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/evento"
   ```

4. **Set up the database**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

## 🎯 Features

- Event creation and management
- Responsive design
- Type-safe database operations
- Modern UI with animations
- Server-side rendering
- API routes for data operations

## 📝 Database Schema

The application uses a PostgreSQL database with the following main model:

### EventoEvent

- `id`: Unique identifier
- `name`: Event name
- `slug`: Unique URL-friendly identifier
- `city`: Event location city
- `location`: Specific venue
- `date`: Event date and time
- `organizerName`: Name of the event organizer
- `imageUrl`: Event image URL
- `description`: Event description
- `createdAt`: Record creation timestamp
- `updatedAt`: Record last update timestamp

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run postinstall` - Generate Prisma client

## 🔧 Development Notes

- The project uses the new Next.js App Router
- TypeScript is strictly enforced
- Database operations are handled through Prisma
- Styling is done with TailwindCSS
- Animations are implemented using Framer Motion

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
