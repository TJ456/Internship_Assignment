import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import ShortRedirect from "./pages/ShortRedirect";

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive
          ? "bg-white text-indigo-600 shadow-sm"
          : "text-gray-600 hover:text-indigo-600 hover:bg-white/50"
      }`}
    >
      {children}
    </Link>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50">
        <nav className="bg-white/30 backdrop-blur-sm border-b border-white/50 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                  URLShort
                </span>
              </div>
              <div className="flex gap-2">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/admin">Admin</NavLink>
              </div>
            </div>
          </div>
        </nav>

        <main>
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
