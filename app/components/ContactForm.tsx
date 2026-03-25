"use client";

import { useState, useRef, type FormEvent } from "react";

interface FormState {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ status: "idle", message: "" });
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setForm({ status: "submitting", message: "" });

    const data = new FormData(e.currentTarget);

    // Honeypot check (client-side early return)
    if (data.get("website")) {
      setForm({ status: "success", message: "Thank you! We'll be in touch soon." });
      return;
    }

    const payload = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      subject: data.get("subject") as string,
      message: data.get("message") as string,
    };

    // Basic client-side validation
    if (!payload.name || !payload.email || !payload.message) {
      setForm({ status: "error", message: "Please fill in all required fields." });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setForm({ status: "success", message: "Thank you! We'll be in touch soon." });
      formRef.current?.reset();
    } catch (err) {
      setForm({
        status: "error",
        message: err instanceof Error ? err.message : "Something went wrong.",
      });
    }
  }

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Section heading */}
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-playfair-display)] text-3xl sm:text-4xl font-bold text-sage-900">
              Get in Touch
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-oak-400" />
            <p className="mt-4 text-base text-gray-600">
              Have questions or want to stay in the loop? Drop us a message and
              we&apos;ll get back to you as soon as we can.
            </p>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 space-y-6"
            noValidate
          >
            {/* Honeypot - hidden from users, catches bots */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  className="mt-1.5 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  maxLength={254}
                  className="mt-1.5 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                maxLength={200}
                className="mt-1.5 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 focus:outline-none transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                maxLength={2000}
                className="mt-1.5 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 focus:outline-none transition-colors resize-y"
                placeholder="Tell us what you're curious about..."
              />
            </div>

            {/* Status messages */}
            {form.status === "success" && (
              <div className="rounded-lg bg-sage-50 border border-sage-200 p-4 text-sm text-sage-700">
                {form.message}
              </div>
            )}
            {form.status === "error" && (
              <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
                {form.message}
              </div>
            )}

            <button
              type="submit"
              disabled={form.status === "submitting"}
              className="inline-flex w-full items-center justify-center rounded-full bg-sage-500 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-sage-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-500"
            >
              {form.status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
