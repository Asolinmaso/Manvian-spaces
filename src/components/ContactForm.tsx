"use client";

import { useState } from "react";

const COUNTRY_CODES = [
  { code: "+91", country: "India" },
  { code: "+1", country: "USA/Canada" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+81", country: "Japan" },
  { code: "+86", country: "China" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+39", country: "Italy" },
  { code: "+34", country: "Spain" },
  { code: "+31", country: "Netherlands" },
  { code: "+32", country: "Belgium" },
  { code: "+41", country: "Switzerland" },
  { code: "+43", country: "Austria" },
  { code: "+46", country: "Sweden" },
  { code: "+47", country: "Norway" },
  { code: "+45", country: "Denmark" },
  { code: "+358", country: "Finland" },
  { code: "+353", country: "Ireland" },
  { code: "+351", country: "Portugal" },
  { code: "+48", country: "Poland" },
  { code: "+420", country: "Czech Republic" },
  { code: "+36", country: "Hungary" },
  { code: "+40", country: "Romania" },
  { code: "+7", country: "Russia/Kazakhstan" },
  { code: "+380", country: "Ukraine" },
  { code: "+90", country: "Turkey" },
  { code: "+971", country: "UAE" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+974", country: "Qatar" },
  { code: "+973", country: "Bahrain" },
  { code: "+965", country: "Kuwait" },
  { code: "+968", country: "Oman" },
  { code: "+20", country: "Egypt" },
  { code: "+27", country: "South Africa" },
  { code: "+234", country: "Nigeria" },
  { code: "+254", country: "Kenya" },
  { code: "+62", country: "Indonesia" },
  { code: "+60", country: "Malaysia" },
  { code: "+65", country: "Singapore" },
  { code: "+66", country: "Thailand" },
  { code: "+84", country: "Vietnam" },
  { code: "+63", country: "Philippines" },
  { code: "+82", country: "South Korea" },
  { code: "+64", country: "New Zealand" },
  { code: "+52", country: "Mexico" },
  { code: "+55", country: "Brazil" },
  { code: "+54", country: "Argentina" },
  { code: "+57", country: "Colombia" },
  { code: "+58", country: "Venezuela" },
  { code: "+51", country: "Peru" },
  { code: "+56", country: "Chile" },
  { code: "+593", country: "Ecuador" },
  { code: "+598", country: "Uruguay" },
  { code: "+595", country: "Paraguay" },
  { code: "+591", country: "Bolivia" },
  { code: "+880", country: "Bangladesh" },
  { code: "+92", country: "Pakistan" },
  { code: "+94", country: "Sri Lanka" },
  { code: "+95", country: "Myanmar" },
  { code: "+98", country: "Iran" },
  { code: "+972", country: "Israel" },
  { code: "+961", country: "Lebanon" },
  { code: "+962", country: "Jordan" },
  { code: "+963", country: "Syria" },
  { code: "+964", country: "Iraq" },
];

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
            className="h-[44px] pl-3 pr-7 text-[16px] text-[#676767] bg-transparent outline-none appearance-none w-[72px]"
            defaultValue="+91"
          >
            {COUNTRY_CODES.map(({ code }) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#676767] pointer-events-none"
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
