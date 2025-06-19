// app/api/get-areas/route.ts
import { getInteractiveAreas } from "@/action/place";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { id } = await req.json();
    if (!id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });

    const areas = await getInteractiveAreas({limit: 20, page: 1}, id);
    return NextResponse.json({ areas });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
