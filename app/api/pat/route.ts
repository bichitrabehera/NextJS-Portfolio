import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

const PAT_KEY = "portfolio:sauropod-pats";
const MAX_PATS_PER_REQUEST = 100;

export async function GET() {
  try {
    const count = (await redis.get<number>(PAT_KEY)) ?? 0;

    return Response.json({ count });
  } catch {
    return Response.json(
      { error: "Failed to fetch pats" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const requestedCount = Number(body.count);

    if (!Number.isInteger(requestedCount) || requestedCount < 1) {
      return Response.json(
        { error: "Invalid pat count" },
        { status: 400 },
      );
    }

    const increment = Math.min(
      requestedCount,
      MAX_PATS_PER_REQUEST,
    );

    const count = await redis.incrby(PAT_KEY, increment);

    return Response.json({ count });
  } catch {
    return Response.json(
      { error: "Failed to record pats" },
      { status: 500 },
    );
  }
}
