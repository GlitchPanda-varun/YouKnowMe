"use client";

import { useState } from "react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      xProfile: formData.get("xProfile"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setError("An error occurred while sending your message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border rounded-xl p-6 sm:p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 overflow-hidden pointer-events-none rounded-t-xl">
        <FlickeringGrid
          className="h-full w-full opacity-50"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-6 text-center mt-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground text-sm sm:text-base text-balance">
            Have a question or want to work together? Fill out the form below and I'll get back to you soon.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium">Name <span className="text-red-500">*</span></label>
              <input required id="name" name="name" type="text" className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium">Email <span className="text-red-500">*</span></label>
              <input required id="email" name="email" type="email" className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="john@example.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="mobile" className="text-sm font-medium">Mobile</label>
              <input id="mobile" name="mobile" type="tel" className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="+91 90xxx-xxx01" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="xProfile" className="text-sm font-medium">X (Twitter) Profile</label>
              <input id="xProfile" name="xProfile" type="text" className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="https://x.com/username" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium">Message <span className="text-red-500">*</span></label>
            <textarea required id="message" name="message" rows={4} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="How can I help you?"></textarea>
          </div>

          {error && <p className="text-sm text-red-500 font-medium">{error}</p>}
          {success && <p className="text-sm text-green-500 font-medium">Message sent successfully! Check your email.</p>}

          <Button type="submit" disabled={loading} className="w-full mt-2">
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
}
