import { list } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

const ALLOWED = ["egmr", "evta", "dedicated"];

export async function GET(req: NextRequest) {
  const division = new URL(req.url).searchParams.get("division");

  if (!division || !ALLOWED.includes(division)) {
    return NextResponse.json({ url: null });
  }

  try {
    const { blobs } = await list({ prefix: `catalogos/${division}.pdf` });
    const url = blobs.length > 0 ? blobs[0].url : null;
    return NextResponse.json({ url }, {
      headers: { "Cache-Control": "public, max-age=60, stale-while-revalidate=30" },
    });
  } catch {
    return NextResponse.json({ url: null });
  }
}
