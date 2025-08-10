import { useEffect, useState } from "react";
import UrlTable from "../components/UrlTable";
import { getAllUrls } from "../api/urlApi";

export default function AdminPage() {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setError("");
        const data = await getAllUrls();
        setUrls(data);
      } catch (err) {
        setError(err.message);
      }
    })();
  }, []);

  return (
    <div className="page admin-page">
      <h1>Admin - All Shortened URLs</h1>
      {error && <p className="error">{error}</p>}
      <UrlTable urls={urls} />
    </div>
  );
}
