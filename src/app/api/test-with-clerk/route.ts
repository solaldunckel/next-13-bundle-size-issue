import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

export const runtime = 'edge';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ message: "Not logged in" }, { status: 401 });
  }

  return NextResponse.json({ message: "Hello from the API!" });
}