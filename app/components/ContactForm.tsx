"use client";

import { useState, useRef, type FormEvent } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

interface FormState {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ status: "idle", message: "" });
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setForm({ status: "submitting", message: "" });

    const data = new FormData(e.currentTarget);

    // Honeypot check
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

  const inputClasses =
    "mt-1.5 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-sage-400 focus:ring-2 focus:ring-sage-400/20 focus:outline-none transition-all duration-200 hover:border-gray-300";

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Section heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-[family-name:var(--font-playfair-display)] text-2xl sm:text-3xl md:text-4xl font-bold text-sage-900">
              Get in Touch
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-oak-400" />
            <p className="mt-4 text-base text-gray-600">
              Have questions or want to stay in the loop? Drop us a message and
              we&apos;ll get back to you as soon as we can.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 sm:mt-12 space-y-5 rounded-2xl border border-gray-100 bg-gray-50/50 p-4 sm:p-6 md:p-8 shadow-sm"
            noValidate
          >
            {/* Honeypot */}
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

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  className={inputClasses}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  maxLength={254}
                  className={inputClasses}
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
                className={inputClasses}
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                maxLength={2000}
                className={`${inputClasses} resize-y`}
                placeholder="Tell us what you're curious about..."
              />
            </div>

            {/* Status messages */}
            {form.status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 rounded-xl bg-sage-50 border border-sage-200 p-4 text-sm text-sage-700"
              >
                <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                {form.message}
              </motion.div>
            )}
            {form.status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700"
              >
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                {form.message}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={form.status === "submitting"}
              className="group inline-flex w-full items-center justify-center rounded-full bg-sage-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-sage-500/25 hover:bg-sage-600 hover:shadow-sage-500/40 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-500"
            >
              {form.status === "submitting" ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
