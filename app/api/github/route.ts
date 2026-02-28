export async function GET() {
  const username = process.env.GITHUB_USERNAME || "bichitrabehera"; // Default to your username

  try {
    const response = await fetch(
      `https://github.com/users/${username}/contributions`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return new Response("Failed to fetch", { status: 500 });
    }

    const svg = await response.text();

    return new Response(svg, {
      status: 200,
      headers: {
        "Content-Type": "image/svg+xml",
      },
    });
  } catch {
    return new Response("Error fetching data", { status: 500 });
  }
}