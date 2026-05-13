"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

const SPACE_TYPES = [
  "Coworking space",
  "Conference / Meeting room",
  "Virtual office",
  "Dedicated space",
  "Student study area",
  "Shoot room",
  "Projector room / Classroom",
];

const DURATIONS = [
  "Weekly",
  "Monthly",
  "3 Months",
  "6 Months",
  "12 Months",
];

export default function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");

  const [selectedSpaceType, setSelectedSpaceType] = useState("");
  const [isSpaceDropdownOpen, setIsSpaceDropdownOpen] = useState(false);

  const [selectedDuration, setSelectedDuration] = useState("");
  const [isDurationDropdownOpen, setIsDurationDropdownOpen] = useState(false);

  // Disable scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Custom validation for dropdowns
    if (!selectedSpaceType) {
      setStatus("error");
      setErrorMessage("Please select a Space Type");
      return;
    }
    if (!selectedDuration) {
      setStatus("error");
      setErrorMessage("Please select a Duration");
      return;
    }

    const payload = {
      name: formData.get("name"),
      contact: `'${selectedCountryCode} ${formData.get("contact")}`,
      email: formData.get("email"),
      company: formData.get("company"),
      spaceType: selectedSpaceType,
      seats: formData.get("seats"),
      moveInDate: formData.get("moveInDate"),
      duration: selectedDuration,
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to submit booking");
      }

      setStatus("success");
      setTimeout(() => {
        onClose();
        setStatus("idle");
      }, 2000);
    } catch (err) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-[32px] sm:rounded-[48px] shadow-2xl w-full max-w-[900px] max-h-[98vh] overflow-y-auto p-6 sm:p-10 sm:py-8 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 text-[#676767] hover:text-black transition-colors z-[70]"
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="flex flex-col items-center mb-5">
            <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#343434] mb-1">Book Your Space</h2>
            <p className="text-[#676767] text-[12px] sm:text-[14px] text-center max-w-[640px] leading-relaxed">
              Find the workspace that fits your needs. Share a few details and we&apos;ll take it from there.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px] sm:text-[13px] font-medium text-[#343434]">Name :</label>
              <input
                required
                name="name"
                type="text"
                placeholder="Enter Name"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z\s]/g, '');
                }}
                className="w-full h-[36px] px-3 rounded-lg border border-[#AFAFAF] outline-none focus:border-primary transition-colors text-[#676767] text-[12px] sm:text-[13px]"
              />
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px] sm:text-[13px] font-medium text-[#343434]">Contact :</label>
              <div className="flex gap-2">
                <div className="relative w-[70px] sm:w-[80px]">
                  <button
                    type="button"
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                    className="w-full h-[36px] px-2 rounded-lg border border-[#AFAFAF] flex items-center justify-between text-[#676767] bg-white text-[12px]"
                  >
                    <span>{selectedCountryCode}</span>
                    <svg width="8" height="5" viewBox="0 0 10 6" fill="none" className={`transition-transform ${isCountryDropdownOpen ? "rotate-180" : ""}`}>
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {isCountryDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        className="absolute top-full left-0 w-[200px] mt-1 bg-white border border-[#AFAFAF] rounded-lg shadow-xl z-50 max-h-[200px] overflow-y-auto"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <button
                            key={c.country}
                            type="button"
                            onClick={() => {
                              setSelectedCountryCode(c.code);
                              setIsCountryDropdownOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors text-[14px] flex justify-between items-center"
                          >
                            <span className="font-semibold">{c.code}</span>
                            <span className="text-gray-400 text-[12px]">{c.country}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <input
                  required
                  name="contact"
                  type="tel"
                  placeholder="Enter Contact"
                  pattern="[0-9]{7,15}"
                  title="Please enter a valid phone number (7-15 digits)"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                  }}
                  className="flex-1 h-[36px] px-3 rounded-lg border border-[#AFAFAF] outline-none focus:border-primary transition-colors text-[#676767] text-[12px] sm:text-[13px]"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px] sm:text-[13px] font-medium text-[#343434]">Email :</label>
              <input
                required
                name="email"
                type="email"
                placeholder="Enter E-mail"
                className="w-full h-[36px] px-3 rounded-lg border border-[#AFAFAF] outline-none focus:border-primary transition-colors text-[#676767] text-[12px] sm:text-[13px]"
              />
            </div>

            {/* Company */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px] sm:text-[13px] font-medium text-[#343434]">Company / Organization :</label>
              <input
                required
                name="company"
                type="text"
                placeholder="Enter Company / Organization"
                className="w-full h-[36px] px-3 rounded-lg border border-[#AFAFAF] outline-none focus:border-primary transition-colors text-[#676767] text-[12px] sm:text-[13px]"
              />
            </div>

            {/* Space Type */}
            <div className="flex flex-col gap-1 relative">
              <label className="text-[12px] sm:text-[13px] font-medium text-[#343434]">Space Type :</label>
              <button
                type="button"
                onClick={() => setIsSpaceDropdownOpen(!isSpaceDropdownOpen)}
                className="w-full h-[36px] px-3 rounded-lg border border-[#AFAFAF] flex items-center justify-between text-[#676767] bg-white text-[12px] sm:text-[13px]"
              >
                <span className={selectedSpaceType ? "text-[#343434]" : "text-gray-400"}>
                  {selectedSpaceType || "Select Space Type"}
                </span>
                <svg width="10" height="6" viewBox="0 0 12 8" fill="none" className={`transition-transform ${isSpaceDropdownOpen ? "rotate-180" : ""}`}>
                  <path d="M1 1L6 6L11 1" stroke="#343434" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              <AnimatePresence>
                {isSpaceDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="absolute top-full left-0 w-full mt-1 bg-[#F5F5F5] border border-[#D9D9D9] rounded-lg shadow-xl z-[60] overflow-hidden"
                  >
                    {SPACE_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          setSelectedSpaceType(type);
                          setIsSpaceDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 hover:bg-white transition-colors text-[#676767] text-[12px] border-b border-[#D9D9D9] last:border-0"
                      >
                        {type}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Seats */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px] sm:text-[13px] font-medium text-[#343434]">Number Of Seats :</label>
              <input
                required
                name="seats"
                type="number"
                min="1"
                placeholder="Enter Number Of Seats"
                className="w-full h-[36px] px-3 rounded-lg border border-[#AFAFAF] outline-none focus:border-primary transition-colors text-[#676767] text-[12px] sm:text-[13px]"
              />
            </div>

            {/* Date */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px] sm:text-[13px] font-medium text-[#343434]">Preferred Move-in Date :</label>
              <div className="relative">
                <input
                  required
                  name="moveInDate"
                  type="date"
                  className="w-full h-[36px] px-3 rounded-lg border border-[#AFAFAF] outline-none focus:border-primary transition-colors text-[#676767] appearance-none text-[12px] sm:text-[13px] [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM9 14H7V12H9V14ZM13 14H11V12H13V14ZM17 14H15V12H17V14ZM9 18H7V16H9V18ZM13 18H11V16H13V18ZM17 18H15V16H17V18Z" fill="#676767" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Duration */}
            <div className="flex flex-col gap-1 relative">
              <label className="text-[12px] sm:text-[13px] font-medium text-[#343434]">Duration :</label>
              <button
                type="button"
                onClick={() => setIsDurationDropdownOpen(!isDurationDropdownOpen)}
                className="w-full h-[36px] px-3 rounded-lg border border-[#AFAFAF] flex items-center justify-between text-[#676767] bg-white text-[12px] sm:text-[13px]"
              >
                <span className={selectedDuration ? "text-[#343434]" : "text-gray-400"}>
                  {selectedDuration || "Select Duration"}
                </span>
                <svg width="10" height="6" viewBox="0 0 12 8" fill="none" className={`transition-transform ${isDurationDropdownOpen ? "rotate-180" : ""}`}>
                  <path d="M1 1L6 6L11 1" stroke="#343434" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              <AnimatePresence>
                {isDurationDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="absolute top-full left-0 w-full mt-1 bg-[#F5F5F5] border border-[#D9D9D9] rounded-lg shadow-xl z-[60] overflow-hidden"
                  >
                    {DURATIONS.map((dur) => (
                      <button
                        key={dur}
                        type="button"
                        onClick={() => {
                          setSelectedDuration(dur);
                          setIsDurationDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 hover:bg-white transition-colors text-[#676767] text-[12px] border-b border-[#D9D9D9] last:border-0"
                      >
                        {dur}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1 md:col-span-2">
              <label className="text-[12px] sm:text-[13px] font-medium text-[#343434]">Additional Requirements / Message :</label>
              <textarea
                required
                name="message"
                placeholder="Enter Here..."
                rows={3}
                className="w-full p-3 rounded-lg border border-[#AFAFAF] outline-none focus:border-primary transition-colors text-[#676767] resize-none text-[12px] sm:text-[13px]"
              />
            </div>

            {/* Status messages */}
            <div className="md:col-span-2 text-center h-6">
              {status === "success" && <p className="text-primary font-medium">Booking request sent successfully!</p>}
              {status === "error" && <p className="text-red-500 font-medium">{errorMessage}</p>}
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex justify-center mt-2">
              <button
                disabled={status === "loading"}
                type="submit"
                className="w-full max-w-[150px] h-[42px] bg-primary text-white font-semibold text-[16px] rounded-[32px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity disabled:opacity-70"
              >
                {status === "loading" ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
