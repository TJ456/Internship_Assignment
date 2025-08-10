import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Rocket, Settings, Home, Crown } from "lucide-react";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import ShortRedirect from "./pages/ShortRedirect";

function NavLink({ to, children, icon: Icon }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`nav-link ${isActive ? 'active' : ''}`}
    >
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4" />
        <span>{children}</span>
      </div>
    </Link>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Revolutionary Cosmic Navigation */}
        <nav className="nav-glass">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-full">
              <div className="flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-black holographic">
                    Cosmic URL
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-1">
                <NavLink to="/" icon={Home}>
                  Home
                </NavLink>
                <NavLink to="/admin" icon={Crown}>
                  Dashboard
                </NavLink>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content with Cosmic Padding */}
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/:shortcode" element={<ShortRedirect />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
