import { useState } from "react";
import UrlForm from "../components/UrlForm";
import { shortenUrl } from "../api/urlApi";

export default function HomePage() {
  const [shortUrl, setShortUrl] = useState(null);
  const [error, setError] = useState("");

  const handleShorten = async (originalUrl) => {
    try {
      setError("");
      const data = await shortenUrl(originalUrl);
      setShortUrl(data.shortUrl);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="page home-page">
      <h1>URL Shortener</h1>
      <UrlForm onShorten={handleShorten} />
      {shortUrl && (
        <p>
          Short URL:{" "}
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
        </p>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}
