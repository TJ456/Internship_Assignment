import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ShortRedirect() {
  const { shortcode } = useParams();

  useEffect(() => {
    // Option A: client-side fetch to backend to get original and replace
    (async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/${shortcode}`);
        // If backend returns a redirect 302, the browser would have followed it (if not proxied).
        // If backend responds with JSON containing originalUrl (for preview API), handle accordingly.
        // For this project we rely on backend redirect, so this component might just show a "redirecting..." UI.
      } catch (e) {
        console.error(e);
      }
    })();
  }, [shortcode]);

  return <p>Redirecting…</p>;
}
