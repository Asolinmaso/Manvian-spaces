"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const countryCode = (formData.get("countryCode") as string) || "+91";
    const phone = (formData.get("contact") as string) || "";
    const payload = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      contact: phone ? `${countryCode} - ${phone}` : "",
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      <input
        name="firstName"
        type="text"
        placeholder="First Name"
        required
        disabled={status === "loading"}
        className="h-[42px] sm:h-[44px] px-4 border border-[#AFAFAF] rounded-lg text-[16px] sm:text-[18px] text-[#676767] outline-none focus:border-primary disabled:opacity-60"
      />
      <input
        name="lastName"
        type="text"
        placeholder="Last Name"
        required
        disabled={status === "loading"}
        className="h-[42px] sm:h-[44px] px-4 border border-[#AFAFAF] rounded-lg text-[16px] sm:text-[18px] text-[#676767] outline-none focus:border-primary disabled:opacity-60"
      />
      <input
        name="email"
        type="email"
        placeholder="E-mail"
        required
        disabled={status === "loading"}
        className="h-[42px] sm:h-[44px] px-4 border border-[#AFAFAF] rounded-lg text-[16px] sm:text-[18px] text-[#676767] outline-none focus:border-primary disabled:opacity-60"
      />

      <div className="h-[44px] flex items-center border border-[#AFAFAF] rounded-lg overflow-hidden bg-white">
        <div className="relative">
          <select
            aria-label="Country code"
            name="countryCode"
            className="h-[44px] pl-4 pr-9 text-[16px] sm:text-[18px] text-[#676767] bg-transparent outline-none appearance-none"
            defaultValue="+91"
          >
            <option value="+91">+91</option>
          </select>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#676767] pointer-events-none"
            aria-hidden
          >
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="w-px h-6 bg-[#A5A5A5]" aria-hidden />
        <input
          name="contact"
          type="tel"
          placeholder="Contact"
          disabled={status === "loading"}
          className="h-[44px] flex-1 px-4 text-[16px] sm:text-[18px] text-[#676767] outline-none disabled:opacity-60"
        />
      </div>

      <textarea
        name="message"
        placeholder="Message"
        rows={5}
        required
        disabled={status === "loading"}
        className="sm:col-span-2 px-4 py-3 border border-[#AFAFAF] rounded-lg text-[16px] sm:text-[18px] text-[#676767] outline-none focus:border-primary resize-none disabled:opacity-60"
      />

      {status === "success" && (
        <p className="sm:col-span-2 text-primary font-medium">Thank you! We&apos;ll get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="sm:col-span-2 text-red-600 font-medium">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-fit px-6 py-4 bg-primary text-white font-semibold text-[18px] sm:text-[20px] rounded-[32px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
