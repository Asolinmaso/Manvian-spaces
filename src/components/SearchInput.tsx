"use client";

export default function SearchInput({
  placeholder = "Search spaces, rooms, or services...",
  className = "",
}: {
  placeholder?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 h-[42px] sm:h-[44px] px-4 py-2.5 bg-white border border-[#AFAFAF] rounded-lg ${className}`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#676767"
        strokeWidth="2"
        className="flex-shrink-0"
        aria-hidden
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        placeholder={placeholder}
        className="flex-1 min-w-0 bg-transparent text-[#676767] placeholder:text-[#676767] text-[18px] leading-[22px] outline-none"
        aria-label="Search"
      />
    </div>
  );
}
