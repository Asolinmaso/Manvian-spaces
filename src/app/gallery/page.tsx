import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  HoverScale,
} from "@/components/animations";

const galleryImages = [
  { src: "/images/Gallery/Gallery-1.png", alt: "Workspace with yellow accents and whiteboard", colSpan: "col-span-12 md:col-span-5" },
  { src: "/images/Gallery/Gallery-2.png", alt: "Collaborative team workspace", colSpan: "col-span-12 md:col-span-7" },
  { src: "/images/Gallery/Gallery-3.png", alt: "Conference room with large screen", colSpan: "col-span-12 md:col-span-12" },
  { src: "/images/Gallery/Gallery-4.png", alt: "Meeting room setup", colSpan: "col-span-12 md:col-span-7" },
  { src: "/images/Gallery/Gallery-5.png", alt: "Modern office space", colSpan: "col-span-12 md:col-span-5" },
  { src: "/images/Gallery/Gallery-6.png", alt: "Study and reading area", colSpan: "col-span-12 md:col-span-4" },
  { src: "/images/Gallery/Gallery-7.png", alt: "Professional meeting", colSpan: "col-span-12 md:col-span-4" },
  { src: "/images/Gallery/Gallery-8.png", alt: "Open office workspace", colSpan: "col-span-12 md:col-span-4" },
];

export default function Gallery() {
  return (
    <div className="relative min-h-screen bg-white w-full overflow-x-hidden">
      {/* Decorative blurred ellipses - subtle background only */}
      <div
        className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px] -left-10 top-20 sm:top-32 opacity-60 lg:opacity-100 pointer-events-none"
        style={{ background: "rgba(29, 188, 231, 0.66)", filter: "blur(120px)" }}
        aria-hidden
      />
      <div
        className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px] right-0 top-1/4 opacity-60 lg:opacity-100 pointer-events-none"
        style={{ background: "rgba(29, 188, 231, 0.66)", filter: "blur(120px)" }}
        aria-hidden
      />
      <div
        className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px] -left-10 top-[60%] opacity-50 pointer-events-none hidden sm:block"
        style={{ background: "rgba(29, 188, 231, 0.5)", filter: "blur(120px)" }}
        aria-hidden
      />
      <div
        className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px] right-0 top-[75%] opacity-50 pointer-events-none hidden sm:block"
        style={{ background: "#A3FFB7", filter: "blur(120px)" }}
        aria-hidden
      />

      <Header activePage="Gallery" />

      {/* Hero - WORK, CREATE, FOCUS, GROW */}
      <section className="relative px-4 sm:px-6 lg:px-[100px] py-16 lg:py-24">
        <div className="max-w-[1240px] mx-auto">
          {/* Mobile/tablet: stacked, readable */}
          <FadeInUp>
          <div className="lg:hidden grid grid-cols-[1fr_1fr] gap-x-4 gap-y-6 w-full max-w-[380px] mx-auto py-6 items-center">
            {/* Row 1 */}
            <div className="text-left">
              <span className="text-primary font-bold text-[36px] sm:text-[44px] leading-none tracking-wide">
                WORK
              </span>
            </div>
            <div className="text-left">
              <span className="text-black font-bold text-[36px] sm:text-[44px] leading-none tracking-wide">
                CREATE
              </span>
            </div>

            {/* Row 2 */}
            <div className="text-right">
              <p className="text-[#676767] font-medium text-[14px] sm:text-[16px] leading-snug">
                Flexible spaces<br />for every need.
              </p>
            </div>
            <div className="text-left">
              <span className="text-primary font-bold text-[36px] sm:text-[44px] leading-none tracking-wide">
                FOCUS
              </span>
            </div>

            {/* Row 3 */}
            <div className="text-left">
              <span className="text-black font-bold text-[36px] sm:text-[44px] leading-none tracking-wide">
                GROW
              </span>
            </div>
            <div className="text-left">
              <p className="text-[#676767] font-medium text-[14px] sm:text-[16px] leading-snug">
                Spaces crafted<br />for productivity
              </p>
            </div>
          </div>
          </FadeInUp>

          {/* Desktop: match Figma alignment/positions */}
          <FadeInUp delay={0.1}>
          <div className="hidden lg:block">
            <div className="relative mx-auto w-full max-w-[1029px] h-[366px]">
              {/* WORK */}
              <div className="absolute left-0 top-0">
                <div className="text-primary font-semibold text-[111px] leading-[135px]">
                  WORK
                </div>
              </div>

              {/* CREATE (calc(50% - 462/2 + 131.5) ≈ 415px in 1029px container) */}
              <div className="absolute left-[415px] top-0">
                <div className="text-black font-bold text-[111px] leading-[135px]">
                  CREATE
                </div>
              </div>

              {/* FOCUS */}
              <div className="absolute left-[610px] top-[122px]">
                <div className="text-primary font-semibold text-[111px] leading-[135px]">
                  FOCUS
                </div>
              </div>

              {/* Caption 1 */}
              <div className="absolute left-[353px] top-[169px] w-[201px]">
                <div className="text-[#676767] font-semibold text-2xl leading-[29px]">
                  Flexible spaces
                  <br />
                  for every need.
                </div>
              </div>

              {/* GROW (calc(50% - 388/2 - 95.5) ≈ 225px) */}
              <div className="absolute left-[225px] top-[269px]">
                <div className="text-black font-bold text-[111px] leading-[135px]">
                  GROW
                </div>
              </div>

              {/* Caption 2 */}
              <div className="absolute left-[655px] top-[314px] w-[201px]">
                <div className="text-[#676767] font-semibold text-2xl leading-[29px]">
                  Spaces crafted
                  <br />
                  for productivity
                </div>
              </div>
            </div>
          </div>
          </FadeInUp>
        </div>
      </section>

      {/* Gallery grid - responsive, uses images from Gallery folder */}
      <section className="relative px-4 sm:px-6 lg:px-[100px] pb-20 lg:pb-28">
        <div className="max-w-[1240px] mx-auto">
          <StaggerContainer className="grid grid-cols-12 md:auto-rows-[300px] lg:auto-rows-[462px] gap-4 sm:gap-5 lg:gap-6" staggerDelay={0.08}>
            {galleryImages.map((img) => (
              <StaggerItem
                key={img.src}
                className={`${img.colSpan}`}
              >
                <HoverScale className="w-full h-full">
              <div
                className="relative w-full h-[250px] md:h-full bg-[#E4E4E4] rounded-xl lg:rounded-2xl overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 100vw"
                />
              </div>
              </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  );
}
