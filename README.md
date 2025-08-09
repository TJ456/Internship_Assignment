# 🔗 URLShort - Modern URL Shortener

A full-stack URL shortening application built with the MERN stack, featuring a beautiful modern UI and comprehensive analytics.

![URL Shortener Demo](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-blue)

## ✨ Features

### 🎯 Core Functionality
- **Instant URL Shortening** - Transform long URLs into short, shareable links
- **Custom Short Codes** - Automatically generated unique identifiers
- **Click Analytics** - Track and monitor link performance
- **Responsive Design** - Works seamlessly across all devices

### 🎨 Modern UI/UX
- **Glass Morphism Design** - Beautiful translucent interface elements
- **Gradient Backgrounds** - Eye-catching animated gradients
- **Smooth Animations** - Fluid transitions and micro-interactions
- **Interactive Elements** - Hover effects and loading states

### 📊 Admin Dashboard
- **Analytics Overview** - Comprehensive link performance metrics
- **URL Management** - View, edit, and manage all shortened URLs
- **Click Tracking** - Real-time click statistics
- **Creation Timestamps** - Track when links were created

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern functional components with hooks
- **Vite** - Lightning-fast development and build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **React Router** - Client-side routing

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TJ456/Internship_Assignment.git
   cd url-shortener
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Configuration**
   
   Create `.env` in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/urlshortener
   BASE_URL=http://localhost:5000
   ```

   Create `.env` in the frontend directory:
   ```env
   VITE_BACKEND_URL=http://localhost:5000
   VITE_APP_BASE_URL=http://localhost:3000
   ```

5. **Start the Application**
   
   Backend (Terminal 1):
   ```bash
   cd backend
   npm start
   ```
   
   Frontend (Terminal 2):
   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Admin Dashboard: http://localhost:3000/admin

## 📁 Project Structure

```
url-shortener/
├── backend/
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── controllers/
│   │   └── urlController.js   # URL handling logic
│   ├── middleware/
│   │   └── errorHandler.js    # Error handling middleware
│   ├── models/
│   │   └── Url.js             # URL data model
│   ├── routes/
│   │   └── urlRoutes.js       # API routes
│   ├── utils/
│   │   └── generateShortCode.js # Short code generation
│   ├── package.json
│   └── server.js              # Express server setup
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── urlApi.js      # API service functions
│   │   ├── components/
│   │   │   ├── UrlForm.jsx    # URL input form
│   │   │   └── UrlTable.jsx   # URL display table
│   │   ├── pages/
│   │   │   ├── HomePage.jsx   # Main landing page
│   │   │   ├── AdminPage.jsx  # Analytics dashboard
│   │   │   └── ShortRedirect.jsx # Redirect handler
│   │   ├── App.jsx            # Main app component
│   │   ├── main.jsx           # App entry point
│   │   └── styles.css         # Global styles
│   ├── package.json
│   ├── vite.config.js         # Vite configuration
│   └── tailwind.config.js     # Tailwind configuration
└── README.md
```

## 🔌 API Endpoints

### URL Operations
- `POST /api/shorten` - Create a shortened URL
- `GET /api/admin/urls` - Retrieve all URLs (admin)
- `GET /:shortCode` - Redirect to original URL

### Request/Response Examples

**Shorten URL:**
```json
POST /api/shorten
{
  "originalUrl": "https://www.example.com/very/long/url"
}

Response:
{
  "shortUrl": "http://localhost:5000/abc123",
  "shortCode": "abc123",
  "originalUrl": "https://www.example.com/very/long/url"
}
```

**Admin URLs:**
```json
GET /api/admin/urls

Response:
[
  {
    "_id": "64f...",
    "originalUrl": "https://www.example.com",
    "shortCode": "abc123",
    "clicks": 42,
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
]
```

## 🎨 Design Features

### Visual Elements
- **Gradient Animations** - Smooth color transitions
- **Glass Morphism** - Translucent cards with backdrop blur
- **Micro-interactions** - Button hover effects and loading states
- **Responsive Layout** - Mobile-first design approach

### Color Palette
- Primary: Violet to Indigo gradient
- Secondary: Blue to Cyan gradient
- Success: Green tones
- Error: Red to Orange gradient
- Background: Light gray to blue gradient

## 🧪 Testing

Run the application locally and test these scenarios:

1. **URL Shortening**: Enter a long URL and verify short URL generation
2. **Redirection**: Click the short URL and verify redirection
3. **Analytics**: Check admin dashboard for click tracking
4. **Responsive Design**: Test on different screen sizes
5. **Error Handling**: Test with invalid URLs

## 🚀 Deployment

### Production Environment Variables
```env
# Backend
PORT=5000
MONGODB_URI=your_mongodb_connection_string
BASE_URL=https://your-domain.com

# Frontend
VITE_BACKEND_URL=https://your-api-domain.com
VITE_APP_BASE_URL=https://your-frontend-domain.com
```

### Build Commands
```bash
# Frontend build
cd frontend
npm run build

# Backend (production)
cd backend
npm start
```

## 👨‍💻 Author

**Tanmay Joddar** - [TJ456](https://github.com/TJ456)

## 🙏 Acknowledgments

- Built as part of an internship assignment
- Inspired by modern web design trends
- Thanks to the open-source community for amazing tools

---

<div align="center">
  <p>Made with ❤️ and lots of ☕</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
