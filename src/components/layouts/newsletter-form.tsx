"use client";

import { CircleCheck, Send } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

/** UI-only signup — wire to the client's ESP/CRM before launch. */
export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="flex min-h-12 items-center gap-2 text-sm text-teal-400">
        <CircleCheck className="size-4" />
        Thanks — you're on the list. One useful email a month, no noise.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Work email
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Work email"
        className="h-12 flex-1 rounded-full border border-white/10 bg-white/5 px-5 text-sm text-white placeholder:text-neutral-400 focus-visible:border-brand-400 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-400/30"
      />
      <Button type="submit" variant="premium" size="xl" className="shrink-0">
        Subscribe
        <Send data-icon="inline-end" className="size-4" />
      </Button>
    </form>
  );
}
