import { NextResponse } from "next/server";

// Simple in-memory rate limiter (per-IP, resets on redeploy)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

// Basic email validation
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Sanitize input - strip HTML tags
function sanitize(input: string): string {
  return input.replace(/<[^>]*>/g, "").trim();
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Validate types and lengths
    if (
      typeof name !== "string" || name.length > 100 ||
      typeof email !== "string" || email.length > 254 ||
      (subject && (typeof subject !== "string" || subject.length > 200)) ||
      typeof message !== "string" || message.length > 2000
    ) {
      return NextResponse.json(
        { error: "Invalid input." },
        { status: 400 }
      );
    }

    // Validate email format
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitized = {
      name: sanitize(name),
      email: sanitize(email),
      subject: subject ? sanitize(subject) : "",
      message: sanitize(message),
    };

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // For now, log the submission (visible in Vercel logs)
    console.log("Contact form submission:", {
      ...sanitized,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
