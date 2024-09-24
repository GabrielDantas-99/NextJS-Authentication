# Fitness Management System
This project is a complete fitness management platform built using Next.js 14 with NextAuth for authentication and authorization, ShadcnUI for the component library, and PrismaORM for managing the database.

The platform provides different roles (Admin, Personal Trainer, User) with various functionalities tailored to their needs.

## Features
### Authentication & Authorization
  - Role-based Access Control: The system supports three roles: Admin, Personal Trainer (Personal), and User. Each role has access to different features and functionalities.

### Admin Features
  - Financial Dashboard: Access to the gym's financial dashboard, including the ability to manage accounts.
  - Personal Trainer & Student Management: Admins can manage both personal trainers and students.
  - Discount & Plan Management: Create, update, and delete discounts and membership plans.
  - Modality Management: Manage different gym modalities (e.g., Weightlifting, Dance, Functional Training).
  - Schedule Management: Handle gym schedules and holiday closures.
  - News Management: Admins can post news and updates to the users on the platform.

### Personal Trainer Features
  - Training Management: Manage workout routines for assigned students.
  - Schedule Management: Personal trainers can manage their own working hours (availability at the gym).
  - Direct Messaging: Chat functionality to communicate directly with their assigned students.

### User Features
  - Workout Tracking: Users can track their workout routines.
  - Subscription Management: Track payments, plans, and membership details.
  - Personal Information Management: Update personal details.
  - Modality Management: Users can select and manage their participation in various modalities.
  - Personal Trainer Communication: Users can chat with their assigned personal trainer.

### Tech Stack
  - Frontend: Next.js 14, ShadcnUI
  - Backend: Next.js API Routes
  - Authentication: NextAuth (with role-based access control)
  - Database: PrismaORM (PostgreSQL)
  - Styling: TailwindCSS

### Getting Started
#### Prerequisites
  - Node.js (version 14+)
  - PostgreSQL installed and running

#### Installation
  1 - Clone the repository:
```git clone https://github.com/yourusername/fitness-management-system.git```

  2 - Navigate into the project directory:
```cd fitness-management-system```

  3 - Install the dependencies:
```npm install```

  4 - Set up your environment variables:

  Create a .env file in the root directory and configure the following:

```
DATABASE_URL=postgresql://user:password@localhost:5432/fitness_management
NEXTAUTH_SECRET=your_secret_key
```
  5 - Run the Prisma migrations to set up the database schema:
```npx prisma migrate dev```

  6 - Run the development server:
```npm run dev```

  7 - Access the application at http://localhost:3000.

Project Structure
```
├── app                    # Next.js app directory (replaces pages)
├── prisma                 # Prisma ORM schema and migration files
├── components             # Reusable UI components
├── styles                 # Global and component-specific styles
├── public                 # Public assets (images, fonts, etc.)
├── hooks                  # Custom React hooks
├── lib                    # Utility functions and services
├── data                   # Static or mock data used in the application
├── actions                # State management logic and API actions
└── utils                  # Helper functions and utilities
```

## Contributing
Feel free to fork the repository and submit pull requests. Any contributions are welcome to enhance the system.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
