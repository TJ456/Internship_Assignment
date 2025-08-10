# 🚀 LinkForge - Professional URL Shortener

A full-stack URL shortening application with a stunning futuristic UI and enterprise-grade backend architecture.

![LinkForge Banner](https://img.shields.io/badge/LinkForge-URL%20Shortener-blueviolet?style=for-the-badge&logo=link&logoColor=white)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=flat&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=flat&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

## Features

- **🎨 Futuristic UI**: Revolutionary glass morphism design with cosmic gradients and holographic effects
- **⚡ Lightning Fast**: Sub-millisecond URL shortening with optimized algorithms
- **📊 Real-time Analytics**: Comprehensive dashboard with click tracking and statistics
- **🔒 Secure**: Input validation, error handling, and MongoDB data persistence
- **📱 Responsive**: Works perfectly on all devices with adaptive design
- **🌐 Professional Routing**: Clean URLs with intelligent proxy configuration

## 🏗️ Architecture

### Frontend (React + Vite + Tailwind CSS)
```
frontend/
├── src/
│   ├── api/           # API integration layer
│   ├── components/    # Reusable UI components
│   ├── pages/         # Route components
│   └── styles.css     # Revolutionary CSS design system
├── vite.config.js     # Advanced proxy configuration
└── package.json       # Modern dependencies
```

### Backend (Node.js + Express + MongoDB)
```
backend/
├── config/           # Database configuration
├── controllers/      # Business logic layer
├── middleware/       # Error handling & validation
├── models/           # MongoDB schemas
├── routes/           # API route definitions
├── utils/            # Utility functions
└── server.js         # Application entry point
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/TJ456/Internship_Assignment.git
cd url-shortener
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGO_URI=mongodb://localhost:27017/urlshortener
# OR for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/urlshortener

PORT=5000
BASE_URL=http://localhost:3000
```

Start the backend server:
```bash
npm start
# OR for development with auto-reload:
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

### 4. Access the Application
- **Frontend**: http://localhost:3000 (or 3001/3002 if port busy)
- **Backend API**: http://localhost:5000
- **Admin Dashboard**: http://localhost:3000/admin

## 🎯 Unique Features & Implementation

### 🎨 Frontend Innovations

#### **Revolutionary CSS Design System**
- **Custom CSS Variables**: Dynamic cosmic gradients and glow effects
- **Glass Morphism**: Advanced backdrop-filter with layered transparency
- **Holographic Text**: Animated gradient text with hue-rotation effects
- **Neon Animations**: Subtle pulsing and breathing effects for UI elements
- **Responsive Magic**: Seamless adaptation across all screen sizes

#### **Smart Component Architecture**
- **Modular Design**: Reusable components with consistent styling
- **State Management**: Clean React hooks implementation
- **Error Boundaries**: Graceful error handling with beautiful UI feedback
- **Loading States**: Animated cosmic loaders and smooth transitions

#### **Advanced Vite Configuration**
```javascript
// Intelligent proxy setup for seamless full-stack development
proxy: {
  "/api": "http://localhost:5000",
  "^/([A-Za-z0-9_-]{4,})$": "http://localhost:5000"  // Shortcode routing
}
```

### ⚡ Backend Excellence

#### **Modern ES6+ Architecture**
- **ES Modules**: Full ES6 module system with clean imports
- **Async/Await**: Modern asynchronous programming patterns
- **Environment Configuration**: Secure environment variable management

#### **Intelligent URL Generation**
```javascript
// Cryptographically secure short codes using nanoid
import { nanoid } from "nanoid";
export const generateShortCode = () => nanoid(6);
```

#### **Smart Duplicate Prevention**
- **URL Deduplication**: Returns existing short URLs for duplicate requests
- **Database Optimization**: Efficient MongoDB queries with indexing
- **Click Tracking**: Real-time analytics with atomic updates

#### **Professional Error Handling**
```javascript
// Centralized error middleware
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error", error: err.message });
};
```

#### **Clean API Design**
- **RESTful Endpoints**: Intuitive API structure
- **Input Validation**: Robust URL validation using `valid-url`
- **CORS Configuration**: Secure cross-origin resource sharing

### 🔄 Seamless Integration

#### **Intelligent Routing System**
- **Frontend Routing**: React Router with smooth transitions
- **Proxy Configuration**: Seamless API calls during development
- **Shortcode Handling**: Automatic redirection with click tracking

#### **Database Excellence**
```javascript
// Optimized MongoDB schema with timestamps
const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortCode: { type: String, required: true, unique: true },
  clicks: { type: Number, default: 0 }
}, { timestamps: true });
```

## 🛠️ Technology Stack

### Frontend
- **React 18.2.0**: Latest React with concurrent features
- **Vite 4.2.0**: Lightning-fast build tool and dev server
- **Tailwind CSS 3.3.0**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons
- **React Router DOM**: Client-side routing

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Fast, unopinionated web framework
- **MongoDB**: NoSQL document database
- **Mongoose**: MongoDB object modeling
- **Nanoid**: Secure, URL-friendly unique ID generator
- **Valid-URL**: URL validation library

### Development Tools
- **Nodemon**: Auto-restart development server
- **PostCSS**: CSS transformation tool
- **Autoprefixer**: CSS vendor prefixing

## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/shorten` | Create shortened URL |
| `GET` | `/api/admin/urls` | Get all URLs with analytics |
| `GET` | `/:shortcode` | Redirect to original URL |

### Request/Response Examples

#### Shorten URL
```bash
POST /api/shorten
Content-Type: application/json

{
  "originalUrl": "https://example.com/very/long/url"
}

# Response
{
  "shortUrl": "http://localhost:3000/abc123"
}
```

#### Get Analytics
```bash
GET /api/admin/urls

# Response
[
  {
    "_id": "...",
    "originalUrl": "https://example.com",
    "shortCode": "abc123",
    "clicks": 42,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

## 🎨 Design Highlights

- **Cosmic Color Palette**: Purple, blue, and cyan gradients
- **Glass Morphism**: Translucent elements with backdrop blur
- **Smooth Animations**: CSS transforms and transitions
- **Interactive Feedback**: Hover effects and loading states
- **Professional Typography**: Clean, readable font hierarchy
- **Accessibility**: WCAG compliant color contrasts

## 🔧 Development

### Available Scripts

#### Backend
```bash
npm start        # Production server
npm run dev      # Development with nodemon
```

#### Frontend
```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
```

### Environment Variables
Create `.env` in backend directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
BASE_URL=http://localhost:3000
```

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**TJ456** - [GitHub Profile](https://github.com/TJ456)
