import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Virtual Office for business & GST",
    image: "/images/built_for_work/Build_for_work_1.png",
  },
  {
    title: "Co-working desks & dedicated cabins",
    image: "/images/built_for_work/Build_for_work_2.png",
  },
  {
    title: "Conference & meeting rooms",
    image: "/images/built_for_work/Build_for_work_3.png",
  },
  {
    title: "students study area",
    image: "/images/built_for_work/Build_for_work_4.png",
  },
];

const amenities = [
  {
    key: "wifi",
    title: "High-Speed Wi-Fi Connection",
    variant: "light",
    image: "/images/Amenities%20offered/heroicons-solid_wifi.png",
  },
  {
    key: "available",
    title: "Available 24*7",
    variant: "light",
    image: "/images/Amenities%20offered/formkit_datetime.png",
  },
  {
    key: "coffee",
    title: "Micro-ground Coffee",
    variant: "highlight",
    image: "/images/Amenities%20offered/micro-ground_coffee.png",
  },
  {
    key: "parking",
    title: "Sufficient Parking Space",
    variant: "light",
    image: "/images/Amenities%20offered/mingcute_parking-line.png",
  },
  {
    key: "power",
    title: "Power Backups",
    variant: "light",
    image: "/images/Amenities%20offered/mdi_power-plug-battery-outline.png",
  },
  {
    key: "lounge",
    title: "Lounge & Cafeteria Space",
    variant: "light",
    image: "/images/Amenities%20offered/openmoji_cafeteria.png",
  },
];

const features = [
  { num: "01", title: "Flexible Workspaces" },
  { num: "02", title: "Supportive Community" },
  { num: "03", title: "Purposeful Growth" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white w-full overflow-hidden">
      {/* Decorative blurred ellipses */}
      <div
        className="absolute w-[450px] h-[450px] left-[-50px] top-[59px] -scale-x-100"
        style={{ background: "#A3FFB7", filter: "blur(450px)" }}
        aria-hidden
      />
      <div
        className="absolute w-[303px] h-[303px] left-[1196px] top-[1368px] hidden lg:block"
        style={{ background: "rgba(29, 188, 231, 0.66)", filter: "blur(400px)" }}
        aria-hidden
      />

      <Header activePage="Home" />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(/images/banner_bg.png)",
          }}
        />
        <div className="relative min-h-[520px] lg:min-h-[620px] flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <p className="text-white text-lg sm:text-2xl font-normal mb-3 sm:mb-4">
            Space with Opportunities
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-tight lg:leading-[78px] max-w-[722px]">
            <span className="text-white">Work Starts With the </span>
            <span className="text-primary">Right Space.</span>
          </h1>
        </div>
      </section>

      {/* Inspiring Workspaces Section */}
      <section className="relative px-4 sm:px-6 lg:px-[100px] py-16 lg:py-20 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#676767] text-lg sm:text-2xl font-normal mb-2">
              Inspiring Workspaces
            </p>
            <h2 className="text-primary text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-tight lg:leading-[85px] mb-6">
              Spaces Designed for How You Work
            </h2>
            <div className="relative w-full max-w-[608px] aspect-[608/296] rounded-2xl overflow-hidden bg-[#CECECE]">
              <Image
                src="/images/home_knowmore.png"
                alt="Collaborative workspace"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="lg:pt-0 pt-4">
            <p className="text-[#676767] text-lg sm:text-2xl leading-8 sm:leading-9 mb-8 sm:mb-10 max-w-[592px]">
              At Manvian Spaces, we create more than just workspaces. We build
              flexible, thoughtfully designed environments where individuals and
              businesses come together to collaborate, innovate, and grow —
              supported by a strong, community-first culture.
            </p>
            <div className="flex flex-col gap-4 mb-10">
              {features.map((f) => (
                <div key={f.num} className="flex items-center gap-4">
                  <span className="text-primary font-bold text-lg sm:text-2xl">{f.num}</span>
                  <span className="text-[#343434] font-semibold text-lg sm:text-2xl">
                    {f.title}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-4 bg-primary text-white font-bold text-lg sm:text-2xl rounded-[48px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity w-fit"
            >
              Know More
            </Link>
          </div>
        </div>
      </section>

      {/* Smart spaces Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-[100px]">
        <p className="text-center text-[#676767] text-lg sm:text-2xl font-normal mb-4">
          Built for Work
        </p>
        <h2 className="text-center text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-tight lg:leading-[78px] mb-10 sm:mb-12 max-w-[1088px] mx-auto">
          <span className="text-[#343434]">Smart spaces. </span>
          <span className="text-primary">Seamless services.</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1240px] mx-auto">
          {services.map((s) => (
            <div key={s.title} className="w-full flex flex-col">
              <div className="relative w-full aspect-[292/382] rounded-[24px] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 px-2 sm:px-4 text-[#676767] text-lg sm:text-2xl leading-snug sm:leading-[29px] font-normal">
                {s.title}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-8 mt-12">
          <button
            type="button"
            aria-label="Previous"
            className="w-[60px] h-[60px] rounded-full bg-white border-[1.5px] border-[#676767] flex items-center justify-center text-[#676767]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="rotate-90"
            >
              <path
                d="M7 10L12 15L17 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            className="w-[60px] h-[60px] rounded-full bg-primary flex items-center justify-center text-white"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="-rotate-90"
            >
              <path
                d="M7 10L12 15L17 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-tight lg:leading-[78px] max-w-[608px]">
            <span className="text-primary">Amenities </span>
            <span className="text-[#343434]">offered</span>
            <br />
            <span className="text-[#343434]">at the </span>
            <span className="text-primary">premises</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((a) => (
              <div
                key={a.key}
                className={`flex flex-col items-start p-6 gap-6 rounded-[24px] ${
                  a.variant === "highlight"
                    ? "bg-gradient-to-br from-primary to-[#A1EBFF] text-white shadow-[8px_8px_20px_rgba(0,0,0,0.25)]"
                    : "bg-gradient-to-br from-[#EAFAFF] to-[#DFF1F5] text-primary"
                }`}
              >
                <div className="relative w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] flex-shrink-0">
                  <Image src={a.image} alt={a.title} width={80} height={80} />
                </div>
                <p
                  className={`text-lg sm:text-[24px] leading-snug sm:leading-[29px] ${
                    a.variant === "highlight" ? "font-semibold text-white" : "font-normal"
                  }`}
                >
                  {a.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Now CTA */}
      <section className="relative px-4 sm:px-6 lg:px-[100px] py-16">
        <div className="relative max-w-[1240px] mx-auto rounded-[32px] lg:rounded-[40px] overflow-hidden bg-[#343434]">
          <div className="grid lg:grid-cols-2">
            <div className="relative p-8 sm:p-10 lg:p-[60px]">
              <div
                className="pointer-events-none absolute inset-0 opacity-50"
                aria-hidden
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to right, rgba(149,147,147,0.5) 0 1px, rgba(0,0,0,0) 1px 72px)",
                }}
              />
              <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-tight lg:leading-[59px] mb-6 sm:mb-8">
                  <span className="text-white">Reserve your workspace </span>
                  <span className="text-primary">in just a few clicks.</span>
                </h3>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center px-6 py-4 bg-primary text-white font-semibold text-lg sm:text-2xl rounded-[48px] shadow-[4px_4px_10px_rgba(0,0,0,0.25)] w-fit hover:opacity-90 transition-opacity"
                >
                  Book Now
                </Link>
              </div>
            </div>
            <div className="relative min-h-[240px] sm:min-h-[320px] lg:min-h-[415px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(270deg, rgba(0,0,0,0) 57.62%, rgba(0,0,0,0.5) 87.97%), url(/images/Home_BookNow_bg.jpg)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
