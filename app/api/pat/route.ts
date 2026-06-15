// app/api/pat/route.ts

import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function GET() {
  const count = (await redis.get("portfolio:sauropod-pats")) ?? 0;

  return Response.json({
    count,
  });
}

export async function POST() {
  const count = await redis.incr("portfolio:sauropod-pats");

  return Response.json({
    count,
  });
}