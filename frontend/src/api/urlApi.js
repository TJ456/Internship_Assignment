const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5001";

export async function shortenUrl(originalUrl) {
  const res = await fetch(`${BASE_URL}/api/shorten`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ originalUrl })
  });

  if (!res.ok) throw new Error("Failed to shorten URL");
  return res.json();
}

export async function getAllUrls() {
  const res = await fetch(`${BASE_URL}/api/admin/urls`);
  if (!res.ok) throw new Error("Failed to fetch URLs");
  return res.json();
}
