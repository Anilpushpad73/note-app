# Keep Notes - Note Taking Application

A modern, feature-rich note-taking application built with React, Redux, and Framer Motion. This application provides a clean, intuitive interface for creating, editing, and managing notes with a rich text editor.

## Features

- **User Authentication**: Secure login and registration system
- **Rich Text Editor**: Create beautifully formatted notes using React Quill
- **CRUD Operations**: Full create, read, update, and delete functionality for notes
- **Responsive Design**: Beautiful, mobile-friendly interface built with Tailwind CSS
- **Smooth Animations**: Enhanced user experience with Framer Motion animations
- **State Management**: Efficient state handling using Redux Toolkit
- **Protected Routes**: Secure pages accessible only to authenticated users

## Tech Stack

### Frontend Framework & Libraries
- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **Vite 5.4.2** - Build tool and dev server
### Backend Framework & library
- **Python 3.10**  
- **FastAPI**  
- **Mongodb Atlas**  
- JWT authentication
- **Pydantic (data validation)**
  
### State Management & Data Fetching
- **Redux Toolkit (@reduxjs/toolkit)** - State management
- **React Redux** - React bindings for Redux
- **Axios** - HTTP client for API requests

### UI & Styling
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Quill** - Rich text editor component
- **Lucide React** - Icon library

### Routing
- **React Router DOM** - Client-side routing

## Installation & Setup
#### Frontend
### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Steps to Run Locally

1. **Clone the repository or navigate to the project directory**
   ```bash
   cd project-directory
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will start on `http://localhost:5173` (or another available port)

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/           # Reusable components
│   ├── AddNoteModal.tsx    # Modal for creating new notes
│   ├── EditNoteModal.tsx   # Modal for editing existing notes
│   ├── Navigation.tsx      # Top navigation bar
│   ├── NoteCard.tsx        # Individual note card display
│   └── ProtectedRoute.tsx  # Route wrapper for authentication
├── pages/               # Page components
│   ├── About.tsx          # About page
│   ├── Account.tsx        # User account page
│   ├── Login.tsx          # Login page
│   ├── Notes.tsx          # Main notes dashboard
│   └── Signup.tsx         # Registration page
├── store/               # Redux store configuration
│   ├── slices/
│   │   ├── authSlice.ts   # Authentication state
│   │   └── notesSlice.ts  # Notes state
│   ├── hooks.ts           # Typed Redux hooks
│   └── store.ts           # Store configuration
├── App.tsx              # Main app component with routing
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## Design Decisions & Trade-offs

### 1. Redux Toolkit for State Management
- **Decision**: Used Redux Toolkit instead of Context API or other state libraries
- **Rationale**: Redux Toolkit provides excellent TypeScript support, reduces boilerplate, and offers powerful developer tools for debugging
- **Trade-off**: Slightly more setup complexity, but better scalability for larger applications

### 2. React Quill for Rich Text Editing
- **Decision**: Integrated React Quill as the rich text editor
- **Rationale**: Mature, well-maintained library with good customization options and out-of-the-box functionality
- **Trade-off**: Adds bundle size, but provides professional-grade editing capabilities

### 3. Framer Motion for Animations
- **Decision**: Used Framer Motion for all animations
- **Rationale**: Declarative API, excellent performance, and easy to implement complex animations
- **Trade-off**: Increases bundle size, but significantly enhances user experience

### 4. Client-Side Routing with React Router
- **Decision**: Implemented client-side routing for SPA experience
- **Rationale**: Provides instant navigation without page reloads and better user experience
- **Trade-off**: Initial bundle size is larger, but subsequent navigation is faster

### 5. Tailwind CSS for Styling
- **Decision**: Hand-crafted all components using Tailwind CSS utility classes
- **Rationale**: Follows project requirements, provides consistent design system, and excellent customization
- **Trade-off**: HTML can become verbose, but styling is highly maintainable and consistent

### 6. LocalStorage for Token Persistence
- **Decision**: Store authentication token in localStorage
- **Rationale**: Simple implementation for token persistence across sessions
- **Trade-off**: Less secure than httpOnly cookies, but suitable for frontend-only implementation

### 7. Mock API Integration
- **Decision**: Implemented Axios calls with expected API endpoints
- **Rationale**: Prepares the frontend for backend integration without blocking development
- **Trade-off**: Requires backend API to be implemented separately

## API Endpoints Expected

The frontend is configured to work with these backend API endpoints:

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration

### Notes
- `GET /api/notes` - Fetch all user notes
- `POST /api/notes` - Create new note
- `PUT /api/notes/:note_id` - Update existing note
- `DELETE /api/notes/:note_id` - Delete note

## Database Schema Reference

The frontend expects the following data structures:

### User Object
```typescript
{
  user_id: string (UUID)
  user_name: string
  user_email: string
}
```

### Note Object
```typescript
{
  note_id: string (UUID)
  note_title: string
  note_content: string (HTML)
  last_update: string (ISO date)
  created_on: string (ISO date)
}
```
