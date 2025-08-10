import React, { useEffect, useState } from "react";
import { BarChart3, Globe, TrendingUp, Users, Eye, Calendar, AlertCircle, Database } from "lucide-react";
import { getAllUrls } from "../api/urlApi";

export default function AdminPage() {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setError("");
        setLoading(true);
        const data = await getAllUrls();
        setUrls(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Calculate stats
  const totalUrls = urls.length;
  const totalClicks = urls.reduce((sum, url) => sum + (url.clicks || 0), 0);
  const avgClicksPerUrl = totalUrls > 0 ? (totalClicks / totalUrls).toFixed(1) : 0;
  const recentUrls = urls.filter(url => {
    const created = new Date(url.createdAt);
    const today = new Date();
    const diffTime = Math.abs(today - created);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  }).length;

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="cosmic-loader mx-auto mb-4"></div>
          <p className="text-white/70">Loading cosmic dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-20">
      {/* Cosmic Admin Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-6">
          <Database className="w-12 h-12 text-purple-400 mr-4 animate-pulse" />
          <h1 className="holographic text-6xl font-black tracking-tight">
            Cosmic Dashboard
          </h1>
          <BarChart3 className="w-12 h-12 text-blue-400 ml-4 animate-pulse" />
        </div>
        <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          Monitor your ✨ <span className="neon-text">cosmic URL empire</span> ✨ 
          with advanced analytics and real-time insights
        </p>
      </div>

      {/* Error Display */}
      {error && (
        <div className="max-w-6xl mx-auto mb-8">
          <div className="error">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 mr-3" />
              <span>{error}</span>
            </div>
          </div>
        </div>
      )}

      {/* Revolutionary Stats Cards */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="card text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold holographic mb-2">{totalUrls}</h3>
            <p className="text-white/70 text-sm uppercase tracking-wider">Total URLs</p>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold holographic mb-2">{totalClicks}</h3>
            <p className="text-white/70 text-sm uppercase tracking-wider">Total Clicks</p>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold holographic mb-2">{avgClicksPerUrl}</h3>
            <p className="text-white/70 text-sm uppercase tracking-wider">Avg Clicks</p>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold holographic mb-2">{recentUrls}</h3>
            <p className="text-white/70 text-sm uppercase tracking-wider">This Week</p>
          </div>
        </div>
      </div>

      {/* Ultra-Modern URL Table */}
      <div className="max-w-7xl mx-auto">
        <div className="card-glass p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold holographic">All Shortened URLs</h2>
            <div className="flex items-center gap-2 text-white/60">
              <Users className="w-5 h-5" />
              <span>{totalUrls} entries</span>
            </div>
          </div>
          
          {urls.length === 0 ? (
            <div className="text-center py-16">
              <Globe className="w-16 h-16 mx-auto mb-4 text-white/40" />
              <h3 className="text-xl font-bold text-white/60 mb-2">No URLs Yet</h3>
              <p className="text-white/40">Start creating some cosmic shortcuts!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Original URL</th>
                    <th>Short Code</th>
                    <th>Clicks</th>
                    <th>Created</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {urls.map((url, index) => (
                    <tr key={url._id || index}>
                      <td>
                        <div className="max-w-xs">
                          <a 
                            href={url.originalUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-purple-300 transition-colors duration-300 hover:underline"
                          >
                            {url.originalUrl?.length > 50 
                              ? url.originalUrl.substring(0, 50) + '...' 
                              : url.originalUrl}
                          </a>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <code className="px-3 py-1 bg-black/30 rounded-lg text-cyan-400 font-mono">
                            {url.shortCode}
                          </code>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-emerald-400" />
                          <span className="font-bold text-emerald-400">{url.clicks || 0}</span>
                        </div>
                      </td>
                      <td>
                        <div className="text-white/70">
                          {url.createdAt ? new Date(url.createdAt).toLocaleDateString() : 'N/A'}
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                          <span className="text-emerald-400 text-sm font-medium">Active</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
