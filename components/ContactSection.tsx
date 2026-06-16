"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import type { Dictionary } from "@/lib/translations";

type ContactSectionProps = {
  dictionary: Dictionary["contact"];
};

type Status = "idle" | "sending" | "sent" | "error";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export function ContactSection({ dictionary }: ContactSectionProps) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS environment variables are not configured.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("sent");
      form.reset();
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setStatus("error");
    }
  }

  const statusMessage =
    status === "sending"
      ? dictionary.sending
      : status === "sent"
        ? dictionary.sent
        : status === "error"
          ? dictionary.error
          : "";

  return (
    <section id="contact" className="bg-white px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1fr]">
        <div>
          <div className="mb-6 h-px w-16 bg-gold" />
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-gold">
            {dictionary.eyebrow}
          </p>
          <h2 className="text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
            {dictionary.title}
          </h2>
          <div className="mt-10 space-y-6">
            {dictionary.items.map((item) => (
              <div key={item.label} className="border-l border-gold pl-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gold bg-white p-5 sm:p-8"
        >
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-black">
              {dictionary.fields.name}
              <input
                name="name"
                type="text"
                required
                placeholder={dictionary.fields.namePlaceholder}
                className="rounded-xl border border-gold bg-white px-4 py-4 text-base font-normal normal-case tracking-normal text-black outline-none transition-shadow placeholder:text-black/45 focus:shadow-[0_0_0_3px_rgba(196,156,49,0.18)]"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-black">
              {dictionary.fields.email}
              <input
                name="email"
                type="email"
                required
                placeholder={dictionary.fields.emailPlaceholder}
                className="rounded-xl border border-gold bg-white px-4 py-4 text-base font-normal normal-case tracking-normal text-black outline-none transition-shadow placeholder:text-black/45 focus:shadow-[0_0_0_3px_rgba(196,156,49,0.18)]"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-black">
              {dictionary.fields.message}
              <textarea
                name="message"
                required
                rows={6}
                placeholder={dictionary.fields.messagePlaceholder}
                className="resize-none rounded-xl border border-gold bg-white px-4 py-4 text-base font-normal normal-case tracking-normal text-black outline-none transition-shadow placeholder:text-black/45 focus:shadow-[0_0_0_3px_rgba(196,156,49,0.18)]"
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full border border-gold bg-black px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-gold hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? dictionary.sending : dictionary.submit}
            </button>

            {statusMessage ? (
              <p
                className={`text-sm font-semibold ${
                  status === "error" ? "text-red-600" : "text-black"
                }`}
                role="status"
              >
                {statusMessage}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
