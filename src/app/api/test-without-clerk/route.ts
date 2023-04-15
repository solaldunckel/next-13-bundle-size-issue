import { NextRequest, NextResponse } from "next/server";

export const runtime = 'edge';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "Hello from the API without Clerk!" });
}