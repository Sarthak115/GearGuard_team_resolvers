# Maintenance Management System

A hackathon project for managing equipment maintenance requests with a Kanban-style workflow.

## Features

### Authentication
- Login and Signup pages with mock authentication
- Session management using localStorage
- Protected routes for authenticated users

### Dashboard
- Summary cards showing:
  - Total equipment count
  - Open maintenance requests
  - In-progress requests
  - Completed requests
- Real-time data from Supabase database

### Maintenance Request Management (Kanban Board)
- Visual Kanban board with 4 columns:
  - New: Newly created requests
  - In Progress: Active maintenance work
  - Repaired: Successfully completed repairs
  - Scrap: Equipment marked for disposal
- Move requests between stages using buttons
- Color-coded status indicators
- Display maintenance type (Corrective or Preventive)
- Show scheduled dates for preventive maintenance

### Create Maintenance Request
- Form to create new maintenance requests
- Select equipment from dropdown
- Choose maintenance type (Corrective or Preventive)
- Set scheduled date for preventive maintenance
- Automatically assigned to "New" status

### Equipment Management
- View all equipment in a table format
- Add new equipment with details:
  - Equipment name
  - Department
  - Location
  - Assigned team
- Track when equipment was added

### Navigation
- Top navigation bar with all sections
- Active tab highlighting
- Logout functionality

## Technology Stack

- React 18 (JavaScript)
- Vite for build tooling
- React Router for navigation
- Supabase for database (PostgreSQL)
- Simple CSS styling (no external UI libraries)

## Database Schema

### Equipment Table
- id, name, department, location, assigned_team, created_at

### Maintenance Requests Table
- id, equipment_id, equipment_name, subject, maintenance_type, status, scheduled_date, created_at

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Workflow Demo

1. Login with any email/password
2. View dashboard statistics
3. Navigate to Maintenance to see Kanban board
4. Create new maintenance request
5. Move requests through workflow stages
6. Add and view equipment

## Future Enhancements

- Real authentication with JWT
- Role-based permissions
- Reporting and analytics
- Team management
- Notifications
- Maintenance calendar view
- OEE calculations
