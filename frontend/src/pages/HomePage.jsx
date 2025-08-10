import React, { useState } from 'react';
import { Link2, Copy, CheckCircle, AlertCircle, Zap, Sparkles, Globe, Shield, Rocket } from 'lucide-react';
import { shortenUrl } from "../api/urlApi";

export default function HomePage() {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setError('');
    setShortenedUrl('');
    
    try {
      const data = await shortenUrl(url);
      setShortenedUrl(data.shortUrl);
    } catch (err) {
      setError(err.message || 'Error shortening URL. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortenedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="container mx-auto px-6 py-20">
      {/* Cosmic Hero Section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-12 h-12 text-purple-400 mr-4 animate-pulse" />
          <h1 className="holographic text-6xl font-black tracking-tight">
            Cosmic URL
          </h1>
          <Zap className="w-12 h-12 text-blue-400 ml-4 animate-pulse" />
        </div>
        <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          Transform your long URLs into ✨ <span className="neon-text">cosmic shortcuts</span> ✨ 
          with our revolutionary URL shortener powered by advanced technology
        </p>
      </div>

      {/* Ultra-Modern URL Form */}
      <div className="max-w-4xl mx-auto mb-12">
        <form onSubmit={handleSubmit} className="card-glass p-8">
          <div className="url-form">
            <div className="flex-1 relative">
              <Link2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="✨ Paste your cosmic URL here to transform it..."
                className="input-field pl-12 text-lg"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <div className="cosmic-loader"></div>
                  <span>Transforming...</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5" />
                  <span>Shorten Now</span>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Error Display */}
      {error && (
        <div className="max-w-4xl mx-auto mb-8">
          <div className="error">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 mr-3" />
              <span>{error}</span>
            </div>
          </div>
        </div>
      )}

      {/* Revolutionary Result Display */}
      {shortenedUrl && (
        <div className="max-w-4xl mx-auto mb-12">
          <div className="result">
            <div className="flex items-center justify-between">
              <div className="flex items-center flex-1">
                <CheckCircle className="w-6 h-6 mr-4 state-success" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">
                    🎉 Your cosmic URL is ready!
                  </h3>
                  <p className="font-mono text-white/90 bg-black/20 p-3 rounded-lg break-all">
                    {shortenedUrl}
                  </p>
                </div>
              </div>
              <button
                onClick={copyToClipboard}
                className={`btn ml-6 ${copied ? 'btn-secondary' : 'btn-primary'}`}
              >
                {copied ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Copied!</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Copy className="w-5 h-5" />
                    <span>Copy</span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cosmic Features Section */}
      <div className="max-w-6xl mx-auto mt-20">
        <div className="text-center mb-12">
          <h2 className="holographic text-4xl font-bold mb-4">
            Why Choose Cosmic URL?
          </h2>
          <p className="text-white/70 text-lg">
            Experience the future of URL shortening with our revolutionary features
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="neon-text text-xl font-bold mb-4">Lightning Fast</h3>
            <p className="text-white/70">
              Instant URL shortening with our optimized cosmic algorithms
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="neon-text text-xl font-bold mb-4">100% Secure</h3>
            <p className="text-white/70">
              Your URLs are protected with enterprise-grade security
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="neon-text text-xl font-bold mb-4">Global Access</h3>
            <p className="text-white/70">
              Access your shortened URLs from anywhere in the cosmos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
