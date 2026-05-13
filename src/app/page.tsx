"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FadeInUp,
  HeroText,
  StaggerContainer,
  StaggerItem,
  HoverScale,
  ImageReveal,
} from "@/components/animations";
import BookingModal from "@/components/BookingModal";
import MobileServicesCarousel from "@/components/MobileServicesCarousel";


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
    key: "coffee",
    title: "Micro-ground Coffee",
    variant: "highlight",
    image: "/images/Amenities%20offered/micro-ground_coffee.png",
  },
  {
    key: "power",
    title: "Power Backups",
    variant: "light",
    image: "/images/Amenities%20offered/mdi_power-plug-battery-outline.png",
  },
  {
    key: "wifi",
    title: "High-Speed Wi-Fi Connection",
    variant: "light",
    image: "/images/Amenities%20offered/heroicons-solid_wifi.png",
  },
  {
    key: "parking",
    title: "Sufficient Parking Space",
    variant: "light",
    image: "/images/Amenities%20offered/mingcute_parking-line.png",
  },
  {
    key: "lounge",
    title: "Lounge & Cafeteria Space",
    variant: "light",
    image: "/images/Amenities%20offered/openmoji_cafeteria.png",
  },
  {
    key: "available",
    title: "Available 24*7",
    variant: "light",
    image: "/images/Amenities%20offered/formkit_datetime.png",
  },
];

const features = [
  { num: "01", title: "Flexible Workspaces" },
  { num: "02", title: "Supportive Community" },
  { num: "03", title: "Purposeful Growth" },
];

type Amenity = (typeof amenities)[number];

function AmenityCard({
  amenity,
  className = "",
}: {
  amenity: Amenity;
  className?: string;
}) {
  return (
    <div
      className={`group flex flex-col items-start p-5 sm:p-6 gap-4 sm:gap-8 rounded-[24px] transition-all duration-300 bg-gradient-to-br from-[#EAFAFF] to-[#DFF1F5] hover:from-primary hover:to-[#A1EBFF] hover:shadow-[8px_8px_20px_rgba(0,0,0,0.25),inset_-2px_-2px_20px_#FFFFFF,inset_2px_2px_20px_rgba(0,0,0,0.4)] ${className}`}
    >
      <div className="relative w-[50px] sm:w-[80px] h-[50px] sm:h-[80px] flex-shrink-0">
        <Image
          src={amenity.image}
          alt={amenity.title}
          width={80}
          height={80}
          className={`w-full h-full object-contain transition-all duration-300 ${amenity.key === "coffee" ? "coffee-icon-color" : "group-hover:brightness-0 group-hover:invert"}`}
        />
      </div>
      <p
        className={`text-[14px] sm:text-[24px] leading-snug sm:leading-[29px] transition-colors duration-300 font-normal text-primary group-hover:font-semibold group-hover:text-white`}
      >
        {amenity.title}
      </p>
      {amenity.key === "coffee" && (
        <style dangerouslySetInnerHTML={{
          __html: `
          .coffee-icon-color {
            filter: brightness(0) saturate(100%) invert(56%) sepia(82%) saturate(2250%) hue-rotate(159deg) brightness(98%) contrast(93%);
          }
          .group:hover .coffee-icon-color {
            filter: brightness(0) invert(1) !important;
          }
        `}} />
      )}
    </div>
  );
}

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const wifiAmenity = amenities.find((a) => a.key === "wifi")!;
  const availableAmenity = amenities.find((a) => a.key === "available")!;
  const coffeeAmenity = amenities.find((a) => a.key === "coffee")!;
  const parkingAmenity = amenities.find((a) => a.key === "parking")!;
  const powerAmenity = amenities.find((a) => a.key === "power")!;
  const loungeAmenity = amenities.find((a) => a.key === "lounge")!;

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
              "url(/images/banner_bg.png)",
          }}
        />
        <div className="relative min-h-[520px] lg:min-h-[620px] flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <HeroText>
            <p className="text-white text-lg sm:text-2xl font-normal mb-3 sm:mb-4">
              Space with Opportunities
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-tight lg:leading-[78px] max-w-[722px]">
              <span className="text-primary">Work </span>
              <span className="text-white">Starts </span>
              <br className="hidden sm:block" />
              <span className="text-white">With the </span>
              <span className="text-primary">Right Space</span>
            </h1>
            <div className="mt-8">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold text-lg sm:text-xl rounded-[48px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity"
              >
                Book Your space
              </button>
            </div>
          </HeroText>
        </div>
      </section>

      {/* Inspiring Workspaces Section */}
      <section className="relative px-4 sm:px-6 lg:px-[100px] py-16 lg:py-20 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <FadeInUp>
            <div>
              <p className="text-[#676767] text-lg sm:text-2xl font-normal mb-2">
                Inspiring Workspaces
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-[48px] font-semibold leading-tight lg:leading-[58px] mb-6 max-w-[608px]">
                <span className="text-primary">Spaces</span>{" "}
                <span className="text-[#343434]">Designed</span>
                <br />
                <span className="text-[#343434]">for How</span>{" "}
                <span className="text-primary">You Work</span>
              </h2>
              <ImageReveal>
                <div className="relative w-full max-w-[608px] aspect-[608/296] rounded-2xl overflow-hidden bg-[#CECECE]">
                  <Image
                    src="/images/home_knowmore.png"
                    alt="Collaborative workspace"
                    fill
                    sizes="(max-width: 768px) 100vw, 608px"
                    className="object-cover object-center"
                  />
                </div>
              </ImageReveal>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <div className="lg:pt-0 pt-4">
              <p className="text-[#676767] text-lg sm:text-2xl leading-8 sm:leading-9 mb-8 sm:mb-10 max-w-[592px]">
                At Manvian Spaces, we create more than just workspaces. We build
                flexible, thoughtfully designed environments where individuals and
                businesses come together to collaborate, innovate, and grow —
                supported by a strong, community-first culture.
              </p>
              <StaggerContainer className="flex flex-col gap-4 mb-10" staggerDelay={0.12}>
                {features.map((f) => (
                  <StaggerItem key={f.num} className="flex items-center gap-4">
                    <span className="text-primary font-bold text-lg sm:text-2xl">{f.num}</span>
                    <span className="text-[#343434] font-semibold text-lg sm:text-2xl">
                      {f.title}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold text-[16px] sm:text-[18px] rounded-[48px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity w-fit"
              >
                Know More
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Smart spaces Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-[100px]">
        <FadeInUp>
          <p className="text-center text-[#676767] text-lg sm:text-2xl font-normal mb-4">
            Built for Work
          </p>
          <h2 className="text-center text-3xl sm:text-5xl lg:text-[64px] font-semibold leading-tight lg:leading-[78px] mb-10 sm:mb-12 max-w-full mx-auto">
            <span className="text-primary">Smart </span>
            <span className="text-[#343434]">spaces & </span>
            <span className="text-primary">Seamless </span>
            <span className="text-[#343434]">services</span>
          </h2>
        </FadeInUp>
        {/* Desktop/Tablet Grid View */}
        <div className="hidden sm:block">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1240px] mx-auto" staggerDelay={0.1}>
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <HoverScale className="w-full flex flex-col">
                  <div className="relative w-full aspect-[292/382] rounded-[24px] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <p className="mt-4 px-2 sm:px-4 text-[#676767] text-lg sm:text-2xl leading-snug sm:leading-[29px] font-normal">
                    {s.title}
                  </p>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Mobile Carousel View */}
        <div className="block sm:hidden">
          <MobileServicesCarousel services={services} />
        </div>
        <FadeInUp delay={0.2}>
          <div className="hidden sm:flex justify-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-4 bg-primary text-white font-semibold text-[20px] rounded-[48px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity"
            >
              Explore Services
            </Link>
          </div>
        </FadeInUp>
      </section>

      {/* Amenities Section */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-[100px]">
        <div className="max-w-[1240px] mx-auto lg:hidden">
          <FadeInUp>
            <h2 className="text-center text-2xl sm:text-3xl font-semibold leading-tight max-w-[608px] mx-auto">
              <span className="text-primary">Amenities</span>{" "}
              <span className="text-[#343434]">offered at</span>
              <br />
              <span className="text-[#343434]">the</span>{" "}
              <span className="text-primary">premises</span>
            </h2>
          </FadeInUp>

          <StaggerContainer className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 place-items-center" staggerDelay={0.08}>
            {amenities.map((a) => (
              <StaggerItem key={a.key}>
                <HoverScale>
                  <AmenityCard amenity={a} className="w-[240px] sm:w-auto" />
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="hidden lg:block">
          <div className="relative mx-auto max-w-[1336px] h-[680px]">
            <FadeInUp>
              <h2 className="absolute left-[48px] top-0 text-[64px] leading-[78px] font-semibold max-w-[608px]">
                <span className="text-primary">Amenities </span>
                <span className="text-[#343434]">offered</span>
                <br />
                <span className="text-[#343434]">at the </span>
                <span className="text-primary">premises</span>
              </h2>
            </FadeInUp>

            <AmenityCard
              amenity={wifiAmenity}
              className="absolute left-[684px] top-[112px] w-[310px] h-[218px]"
            />
            <AmenityCard
              amenity={availableAmenity}
              className="absolute left-[684px] top-[362px] w-[310px] h-[189px]"
            />
            <AmenityCard
              amenity={coffeeAmenity}
              className="absolute left-0 top-[374px] w-[310px] h-[218px]"
            />
            <AmenityCard
              amenity={parkingAmenity}
              className="absolute left-[1026px] top-[216px] w-[310px] h-[218px]"
            />
            <AmenityCard
              amenity={powerAmenity}
              className="absolute left-[342px] top-[238px] w-[310px] h-[189px]"
            />
            <AmenityCard
              amenity={loungeAmenity}
              className="absolute left-[342px] top-[459px] w-[310px] h-[218px]"
            />
          </div>
        </div>
      </section>

      {/* Book Now CTA */}
      <section className="relative px-4 sm:px-6 lg:px-[100px] py-16">
        <FadeInUp>
          <div className="relative max-w-[1240px] mx-auto rounded-[32px] lg:rounded-[40px] overflow-hidden bg-[#343434]">
            {/* Vertical lines background applied to the entire parent so it shows behind the diagonal cut */}
            <div
              className="pointer-events-none absolute inset-0 opacity-50 z-0"
              aria-hidden
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, rgba(149,147,147,0.5) 0 1px, rgba(0,0,0,0) 1px 72px)",
              }}
            />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:min-h-[440px]">
              <div className="relative p-6 sm:p-10 lg:p-[60px] lg:pr-0 pb-10 sm:pb-12 z-20 w-full lg:w-[65%]">
                <div className="relative z-10">
                  <h3 className="font-semibold mb-6 lg:mb-8">
                    {/* Desktop layout: 2 lines */}
                    <div className="hidden lg:block text-[44px] leading-[54px] xl:text-[48px] xl:leading-[59px] whitespace-nowrap">
                      <span className="text-white">Reserve your workspace </span><br />
                      <span className="text-primary">in just a few clicks.</span>
                    </div>
                    {/* Mobile layout: 3 lines */}
                    <div className="block lg:hidden text-[28px] leading-[34px] sm:text-4xl sm:leading-[1.2]">
                      <span className="text-white block">Reserve your </span>
                      <span className="block">
                        <span className="text-white">workspace </span>
                        <span className="text-primary">in just </span>
                      </span>
                      <span className="text-primary block">a few clicks.</span>
                    </div>
                  </h3>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-primary text-white font-semibold text-[16px] sm:text-[20px] rounded-[48px] shadow-[4px_4px_10px_rgba(0,0,0,0.25)] w-fit hover:opacity-90 transition-opacity"
                  >
                    Book Now
                  </Link>
                </div>
              </div>

              {/* Mobile Image */}
              <div className="relative min-h-[400px] sm:min-h-[450px] w-full lg:hidden [clip-path:polygon(0_20%,100%_0,100%_100%,0%_100%)] -mt-16 z-10">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(270deg, rgba(0,0,0,0) 57.62%, rgba(0,0,0,0.5) 87.97%), url(/images/Home_BookNow_bg.jpg)",
                  }}
                />
              </div>

              {/* Desktop Image */}
              <div className="hidden lg:block absolute inset-0 left-[35%] [clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)] z-10">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(270deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.8) 100%), url(/images/Home_BookNow_bg.jpg)",
                  }}
                />
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>

      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
