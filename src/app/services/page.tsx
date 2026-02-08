import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serviceList = [
  {
    title: "Co-working Space",
    description:
      "A flexible workspace designed for productivity and collaboration. Choose a seat, plug in, and get to work with high-speed Wi-Fi and a comfortable environment.",
    includes: [
      { icon: "chair", text: "Hot desk / shared seating" },
      { icon: "wifi", text: "High-speed internet" },
      { icon: "battery", text: "Power backup" },
      { icon: "coffee", text: "Access to cafeteria & lounge" },
    ],
    image: "/images/Services/Co-working_space.png",
  },
  {
    title: "Virtual Office",
    description:
      "Give your business a premium address without the physical space. Ideal for freelancers, startups, and remote teams who need professional documentation support.",
    includes: [
      { icon: "building", text: "Business address" },
      { icon: "mail", text: "Mail handling" },
      { icon: "paper", text: "GST registration support" },
      { icon: "phone", text: "Call & courier assistance" },
    ],
    image: "/images/Services/Virtual_office.png",
  },
  {
    title: "Conference / Meeting Room",
    description:
      "A fully equipped, private space for presentations, client meetings, and team discussions.",
    includes: [
      { icon: "projector", text: "Projector / LED screen" },
      { icon: "whiteboard", text: "Whiteboard" },
      { icon: "wifi", text: "High-speed Wi-Fi" },
      { icon: "chair", text: "Seating for teams & clients" },
      { icon: "coffee", text: "Refreshments on request" },
    ],
    image: "/images/Services/Meeting_room.png",
  },
  {
    title: "Dedicated Space",
    description:
      "Your own permanent desk or cabin for uninterrupted work. Perfect for founders, small teams, and professionals who need ownership of their space.",
    includes: [
      { icon: "room", text: "Fixed desk / personal cabin" },
      { icon: "storage", text: "Storage options" },
      { icon: "calendar", text: "Priority access to meeting rooms" },
      { icon: "clock", text: "6 am - 11 pm availability" },
    ],
    image: "/images/Services/Dedicated_space.png",
  },
  {
    title: "Students Study Area",
    description:
      "A quiet, distraction-free zone for students preparing for exams or working on projects.",
    includes: [
      { icon: "book", text: "Silent study zone" },
      { icon: "wifi", text: "High-speed Wi-Fi" },
      { icon: "chair", text: "Comfortable seating" },
      { icon: "ac", text: "Air-conditioned environment" },
    ],
    image: "/images/Services/Students_Study_area.png",
  },
  {
    title: "Shoot Room",
    description:
      "A clean, well-lit space designed for photography and video shoots.",
    includes: [
      { icon: "building", text: "Minimal setup area" },
      { icon: "bulb", text: "Adjustable lighting options" },
      { icon: "house", text: "Background space" },
      { icon: "mute", text: "Quiet environment" },
      { icon: "calendar", text: "Flexible booking slots" },
    ],
    image: "/images/Services/Shoot_room.png",
  },
  {
    title: "Projector Room / Classroom",
    description:
      "A multi-purpose room ideal for training sessions, workshops, coaching classes, and small events.",
    includes: [
      { icon: "projector", text: "Projector setup" },
      { icon: "whiteboard", text: "Whiteboard" },
      { icon: "chair", text: "Classroom seating" },
      { icon: "wifi", text: "Wi-Fi & power outlets" },
      { icon: "clock", text: "Booking flexibility" },
    ],
    image: "/images/Services/Projector_room.png",
  },
];

function ServiceIcon({ name }: { name: string }) {
  const cls = "flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-primary";
  switch (name) {
    case "chair":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M7 11v2h10v-2H7zm0 4v2h10v-2H7zm0-8v2h10V7H7z" />
          <path d="M5 5v14h2V5H5zm12 0v14h2V5h-2z" fillOpacity={0.5} />
        </svg>
      );
    case "wifi":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 18c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM6 14c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm12 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM6 10c2.2 0 4.2.9 5.6 2.3 1.4 1.4 2.3 3.4 2.3 5.7 0 1.1-.9 2-2 2s-2-.9-2-2c0-1.4-.6-2.7-1.5-3.6C8.7 11.6 7.4 11 6 11c-1.1 0-2 .9-2 2s.9 2 2 2zm12 0c2.2 0 4.2.9 5.6 2.3 1.4 1.4 2.3 3.4 2.3 5.7 0 1.1-.9 2-2 2s-2-.9-2-2c0-1.4-.6-2.7-1.5-3.6-1-.9-2.3-1.5-3.6-1.5-1.1 0-2 .9-2 2s.9 2 2 2zM6 6c3.3 0 6.3 1.3 8.5 3.5C16.7 11.7 18 14.7 18 18c0 1.1-.9 2-2 2s-2-.9-2-2c0-2.5-1-4.9-2.6-6.7C10.9 8.1 8.5 7 6 7c-1.1 0-2 .9-2 2s.9 2 2 2zm12 0c3.3 0 6.3 1.3 8.5 3.5C16.7 11.7 18 14.7 18 18c0 1.1-.9 2-2 2s-2-.9-2-2c0-2.5-1-4.9-2.6-6.7C16.9 8.1 14.5 7 12 7c-1.1 0-2 .9-2 2s.9 2 2 2z" />
        </svg>
      );
    case "battery":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
        </svg>
      );
    case "coffee":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18 8h1V4h-1v4zm-4 0h1V4h-1v4zm-4-4v4h1V4h-1zm11 11H3v-1h18v1zm-1 2H4v-1h12v1z" />
          <path d="M2 19h18v2H2z" fillOpacity={0.7} />
        </svg>
      );
    case "building":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
        </svg>
      );
    case "mail":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      );
    case "paper":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </svg>
      );
    case "phone":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      );
    case "projector":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20 12c0-1.1-.9-2-2-2V6H6v4c-1.1 0-2 .9-2 2s.9 2 2 2v4h12v-4c1.1 0 2-.9 2-2zM6 18v-2h12v2H6z" />
        </svg>
      );
    case "whiteboard":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2.5v6H6zm4.5 0H13v6h-2.5zm5 0H18v4h-2.5v-4z" />
        </svg>
      );
    case "clock":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
        </svg>
      );
    case "book":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
        </svg>
      );
    case "ac":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      );
    case "bulb":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
        </svg>
      );
    case "house":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      );
    case "mute":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
        </svg>
      );
    case "calendar":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
        </svg>
      );
    case "room":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
        </svg>
      );
    case "storage":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z" />
        </svg>
      );
    default:
      return <span className={cls}>•</span>;
  }
}

export default function Services() {
  return (
    <div className="relative min-h-screen bg-white w-full overflow-x-hidden">
      <Header activePage="Services" />

      {/* Hero - Smart, Affordable Spaces for Growing Ideas */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(360deg, rgba(255, 255, 255, 0.05) 0%, rgba(29, 188, 231, 0.05) 100%)",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px] py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="relative z-10">
              <h1 className="text-3xl sm:text-4xl lg:text-[64px] font-semibold leading-tight lg:leading-[78px] text-primary mb-6 max-w-[597px]">
                Smart, Affordable Spaces for Growing Ideas
              </h1>
              <p className="text-[#676767] text-lg sm:text-2xl leading-7 sm:leading-[29px] mb-8 max-w-[658px]">
                Explore a range of spaces crafted to support productivity and
                collaboration.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center px-6 py-4 bg-primary text-white font-semibold text-lg sm:text-[20px] rounded-[48px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity border border-primary"
                >
                  Book Your space
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-4 bg-white text-primary font-semibold text-lg sm:text-[20px] rounded-[48px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] hover:bg-primary/5 transition-colors border border-primary"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative min-h-[280px] sm:min-h-[400px] lg:min-h-[552px] rounded-xl overflow-hidden">
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                aria-hidden
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to right, rgba(29,188,231,0.3) 0 1px, transparent 1px 32px)",
                }}
              />
              <Image
                src="/images/home_knowmore.png"
                alt="Modern workspace"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service sections - alternating layout */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-[100px] space-y-16 sm:space-y-20 lg:space-y-24">
          {serviceList.map((service, i) => {
            const isReversed = i % 2 === 1;

            return (
              <div
                key={service.title}
                className={`flex flex-col gap-8 lg:gap-12 ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center`}
              >
              <div className="flex-1 w-full max-w-[586px] lg:max-w-none">
                <h2 className="text-2xl sm:text-3xl lg:text-[48px] font-semibold leading-tight lg:leading-[59px] text-[#343434] mb-4">
                  {service.title}
                </h2>
                <p className="text-[#676767] text-base sm:text-2xl leading-7 sm:leading-8 mb-6">
                  {service.description}
                </p>
                <div>
                  <h3 className="text-[#343434] font-medium text-lg sm:text-2xl leading-8 mb-3">
                    Includes:
                  </h3>
                  <ul className="flex flex-col gap-2 sm:gap-3">
                    {service.includes.map((item) => (
                      <li
                        key={item.text}
                        className="flex items-center gap-3 sm:gap-4"
                      >
                        <ServiceIcon name={item.icon} />
                        <span className="text-[#676767] text-base sm:text-2xl leading-8">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1 w-full max-w-[586px] lg:max-w-[713px]">
                <div className="relative w-full aspect-[713/480] overflow-visible">
                  {/* Blue offset background (Figma-style). Reverses on alternating rows. */}
                  <div
                    className={`absolute top-[12.5%] bottom-0 bg-primary ${
                      isReversed ? "left-0 right-[16.8%]" : "right-0 left-[16.8%]"
                    }`}
                    aria-hidden
                  />

                  {/* Image frame (grey) */}
                  <div
                    className={`absolute top-[2.1%] bottom-[2.1%] bg-[#D2D2D2] overflow-hidden ${
                      isReversed ? "right-0 left-[2.8%]" : "left-0 right-[2.8%]"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
