export async function shortenUrl(originalUrl) {
  const res = await fetch("/api/shorten", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ originalUrl })
  });

  if (!res.ok) throw new Error("Failed to shorten URL");
  return res.json();
}

export async function getAllUrls() {
  const res = await fetch("/api/admin/urls");
  if (!res.ok) throw new Error("Failed to fetch URLs");
  return res.json();
}
