# Keep Notes - Note Taking Application

A modern, feature-rich note-taking application built with React, Redux, and Framer Motion. This application provides a clean, intuitive interface for creating, editing, and managing notes with a rich text editor.
## All screenshoot:




<div>
     <h2 align="center">signup</h2>
   <img src="https://drive.google.com/uc?id=1U00SpyYxnJNPn5LDO6Z3L7vEeT89eud4" alt="typescript" />
</div>


<div>
    <h2 align="center">Signin</h2>
   <img src="https://drive.google.com/uc?id=1URo_po-Ld3RfWcLxfKPXiM0gDF3VpSYf" alt="typescript" />
</div>

<div>
   <h2 align="center">Notes</h2>
   <img src="https://drive.google.com/uc?id=1Q8RptQuMXinYPrE_zmJAS1R7enj37gyx" alt="typescript" />
</div>


<div>
  <h2 align="center">Editnote</h2>
   <img src="https://drive.google.com/uc?id=1QEmcO9zyeGx-iFvH92DbLm9XGHlCv-Gb" alt="typescript" />
</div>

<div>
  <h2 align="center">About</h2>
   <img src="https://drive.google.com/uc?id=15MiRWj9AsJLlu0i7ilLJEm91jeEpSl9y" alt="typescript" />
</div>


<div>
    <h2 align="center">Account</h2>
   <img src="https://drive.google.com/uc?id=1X3ma3iG_BaW7mU4XoKTKVvFRE3RQtDri" alt="typescript" />
</div>


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
## Frontend
#### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

#### Steps to Run Locally

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
6. **.env file**
   ```bash
   VITE_API_URL=http://127.0.0.1:8000
   ```
## Backend 
 **Set up Python backend**
**Navigate into the **backend** folder**
 ```bash
   cd backend
   ```
**Create and Activate Virtual Environment if not present**
```bash
python -m venv venv
venv\Scripts\activate
```
If successful, your terminal prompt will look like:

(venv) C:\Users\Anil\Downloads\project\backend>

**Install Dependencies**:
**Install  virtual environment if not install:**

```bash

( use pip install -r requirements.txt if the file is present.)
otherwise first create then add this file into it
fastapi==0.115.4
uvicorn[standard]==0.32.0
pydantic==2.9.2
pydantic-core==2.23.4
python-dotenv==1.0.1
motor==3.6.0
passlib[bcrypt]==1.7.4
PyJWT==2.9.0
python-multipart==0.0.9
dnspython==2.7.0
watchfiles==1.1.0

if you face issue still then check it
bcrypt==4.0.1
email-validator==2.3.0
pydantic-settings==2.12.0

```
 ## .env file
 ```bash
MONGO_URL=mongodb+srv://<username>:<password>@clustur.iawjv6k.mongodb.net/?appName=keepNotes&retryWrites=true&w=majority
JWT_SECRET=jhjgcjhvkghvkjhgbjkhbvcxzasdfghjkl
JWT_ALGORITHM=HS256
JWT_EXPIRY_MINUTES=60
CORS_ORIGINS=http://localhost:5173,http://127.0.0.1:5173,http://127.0.0.1:8000,http://localhost:8000
```

if you face issue in flask like(flask is not resolve)
```bash
1 Open VS Code in the project folder.

2 Press Ctrl + Shift + P → type Python: Select Interpreter.

3 At the bottom, click Enter interpreter path → then Find….

4 Navigate to:

C:\Users\Anil\Downloads\project\backend\venv\Scripts\
Select python.exe (⚠ not pythonw.exe).
```
run commands in a separate terminal
   ```bash
   cd backend
   python -m uvicorn main:app --reload --port 8000
   ```
   The backend will run on ` http://127.0.0.1:8000`

   
## Project Structure

```
backend/
├── __pycache__/
│   ├── config.cpython-312.pyc
│   ├── db.cpython-312.pyc
│   └── main.cpython-312.pyc
├── models/
│   ├── __pycache__/
│   └── schemas.py
├── routes/
│   ├── __pycache__/
│   ├── auth_routes.py
│   └── notes_routes.py
├── utils/
│   ├── __pycache__/
│   ├── auth.py
│   └── dependencies.py
├── venv/
├── .env
├── config.py
├── db.py
├── main.py
├── README.md
├── requirements.txt
.
.
.
frontend
├──src/
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

## Database Model Theory
#### USER
```typescript
{
  user_id
  user_name
  user_email
  password
  created_on
  last_update
}
```

#### NOTES
```typescript
{
  note_id
  note_title
  note_content 
  created_on
  last_update
}
```


