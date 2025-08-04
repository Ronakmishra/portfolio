import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_URL;
    if (!endpoint) {
      return NextResponse.json(
        { error: "Form endpoint not configured" },
        { status: 500 }
      );
    }
    const res = await fetch(endpoint, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });
    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
