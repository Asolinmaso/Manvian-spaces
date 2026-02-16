import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FadeInUp,
  ImageReveal,
  StaggerContainer,
  StaggerItem,
  HoverScale,
} from "@/components/animations";

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

export default function About() {
  return (
    <div className="relative min-h-screen bg-white w-full">
      <Header activePage="About" />

      {/* Frame 1321314791 - Banner: h 431px, starts right after nav (no top gap) */}
      <section className="relative w-full overflow-hidden">
        <ImageReveal>
        <div className="relative w-full aspect-[1440/431] min-h-[220px] sm:min-h-[300px] lg:min-h-[431px]">
          <Image
            src="/images/about_banner.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center lg:object-[50%_20%]"
          />
        </div>
        </ImageReveal>
      </section>

      {/* Frame 1321314852 - About text block: top 713px, below banner (40px gap) */}
      <section className="relative w-full mt-10 px-4 sm:px-6 lg:px-[100px] max-w-[1440px] mx-auto">
        <div className="max-w-[1240px] mx-auto grid gap-8 lg:grid-cols-2 items-start">
        <FadeInUp>
          <div className="flex flex-col">
            <p className="text-[#676767] text-lg sm:text-2xl leading-snug sm:leading-[29px] mb-2">
              About Manvian Micro Spaces
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-tight lg:leading-[78px] text-[#343434]">
              A <span className="text-primary">Space</span> for Ideas to{" "}
              <span className="text-primary">Grow</span>
            </h1>
          </div>
        </FadeInUp>
          <FadeInUp delay={0.15}>
          <p className="text-[#676767] text-lg sm:text-2xl leading-8 sm:leading-9">
            Manvian Spaces is more than a coworking space—it&apos;s a thoughtfully
            designed ecosystem for creators, startups, freelancers, and growing
            teams. Built to inspire ideas, encourage collaboration, and support
            smarter ways of working.
          </p>
          </FadeInUp>
        </div>
      </section>

      {/* Purpose, Vision & Direction */}
      <section
        className="relative py-20 px-4"
        style={{ background: "rgba(29, 188, 231, 0.04)" }}
      >
        <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-10">
          <FadeInUp>
          <div className="text-center">
            <p className="text-[#676767] text-lg sm:text-2xl leading-snug sm:leading-[29px] mb-2">
              What Drives Us
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-tight lg:leading-[78px]">
              <span className="text-[#343434]">Purpose, </span>
              <span className="text-primary">Vision</span>
              <span className="text-[#343434]"> & Direction</span>
            </h2>
          </div>
          </FadeInUp>
          <StaggerContainer className="flex flex-wrap justify-center gap-8" staggerDelay={0.15}>
            {/* Our Vision - blue card */}
            <StaggerItem>
            <HoverScale>
            <div className="w-full max-w-[382px] p-4 rounded-[24px] bg-primary shadow-[10px_10px_32px_rgba(0,0,0,0.25)] flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1DBCE7" strokeWidth="2" strokeLinecap="round">
                  <path d="M9 18h6M10 22h4M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-[32px] leading-[39px]">
                Our Vision
              </h3>
              <p className="text-white text-lg sm:text-2xl leading-8 sm:leading-9 text-center">
                To shape the future of work through inspiring spaces that empower
                people and businesses.
              </p>
            </div>
            </HoverScale>
            </StaggerItem>
            {/* Our Mission - white card */}
            <StaggerItem>
            <HoverScale>
            <div className="w-full max-w-[382px] p-4 rounded-[24px] bg-white/50 border border-[#676767] flex flex-col items-center gap-4">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="79" height="79" rx="39.5" stroke="#343434"/>
<path d="M56.0789 24.2041C56.0656 24.14 56.0343 24.081 55.9886 24.0341C55.9429 23.9872 55.8848 23.9543 55.8211 23.9393C51.5726 22.9002 41.7586 26.6026 36.4359 31.9213C35.4873 32.8622 34.6223 33.8837 33.8507 34.9744C32.2101 34.826 30.5695 34.951 29.1726 35.5604C25.2281 37.2948 24.0804 41.8244 23.7601 43.769C23.7428 43.8755 23.7502 43.9846 23.7818 44.0879C23.8134 44.1911 23.8683 44.2856 23.9424 44.3642C24.0164 44.4428 24.1075 44.5033 24.2087 44.5409C24.3099 44.5786 24.4184 44.5925 24.5257 44.5815L30.8593 43.8862C30.8637 44.3639 30.8924 44.8411 30.9453 45.3159C30.9783 45.644 31.1248 45.9504 31.3593 46.1823L33.8117 48.6346C34.0437 48.8694 34.3504 49.0158 34.6789 49.0487C35.1508 49.1013 35.6251 49.13 36.1 49.1346L35.4054 55.4627C35.3946 55.57 35.4086 55.6783 35.4462 55.7793C35.4839 55.8803 35.5443 55.9713 35.6228 56.0452C35.7013 56.1191 35.7957 56.174 35.8987 56.2056C36.0018 56.2373 36.1107 56.2448 36.2172 56.2276C38.1625 55.9151 42.7015 54.7674 44.4257 50.8237C45.0351 49.4252 45.1601 47.7932 45.0195 46.1604C46.1134 45.3895 47.1379 44.5245 48.0812 43.5752C53.4234 38.2627 57.1023 28.6643 56.0789 24.2041ZM43.3328 36.6932C42.8662 36.2267 42.5484 35.6323 42.4196 34.9852C42.2908 34.338 42.3568 33.6672 42.6093 33.0576C42.8618 32.448 43.2893 31.927 43.8379 31.5604C44.3866 31.1938 45.0316 30.9981 45.6914 30.9981C46.3512 30.9981 46.9962 31.1938 47.5448 31.5604C48.0934 31.927 48.521 32.448 48.7734 33.0576C49.0259 33.6672 49.0919 34.338 48.9632 34.9852C48.8344 35.6323 48.5166 36.2267 48.05 36.6932C47.7405 37.0034 47.3728 37.2494 46.9681 37.4173C46.5634 37.5852 46.1295 37.6716 45.6914 37.6716C45.2532 37.6716 44.8193 37.5852 44.4146 37.4173C44.0099 37.2494 43.6423 37.0034 43.3328 36.6932Z" stroke="#343434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.5656 47.5C27.7868 47.5956 27.0623 47.9487 26.507 48.5031C25.1305 49.8844 25 55 25 55C25 55 30.1187 54.8695 31.4961 53.4914C32.0528 52.9371 32.4065 52.2113 32.5 51.4313" stroke="#343434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


              <h3 className="text-[#343434] font-semibold text-[32px] leading-[39px]">
                Our Mission
              </h3>
              <p className="text-[#676767] text-lg sm:text-2xl leading-8 sm:leading-9 text-center">
                To deliver flexible, well-designed workspaces that enhance
                productivity, creativity, and meaningful collaboration.
              </p>
            </div>
            </HoverScale>
            </StaggerItem>
            {/* Our Values - white card */}
            <StaggerItem>
            <HoverScale>
            <div className="w-full max-w-[382px] p-4 rounded-[24px] bg-white/50 border border-[#676767] flex flex-col items-center gap-4">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="79" height="79" rx="39.5" stroke="#343434"/>
<path d="M23.75 33.75H56.25M22.7672 34.7039L38.9977 55.7555C39.1156 55.9092 39.2674 56.0338 39.4412 56.1195C39.615 56.2053 39.8062 56.2499 40 56.2499C40.1938 56.2499 40.385 56.2053 40.5588 56.1195C40.7326 56.0338 40.8844 55.9092 41.0023 55.7555L57.2328 34.7039C57.3924 34.4961 57.485 34.2447 57.4982 33.9831C57.5115 33.7214 57.4448 33.4619 57.307 33.2391L51.8016 24.3523C51.6882 24.1684 51.5297 24.0166 51.3412 23.9111C51.1526 23.8057 50.9403 23.7502 50.7242 23.75H29.2758C29.0598 23.7502 28.8474 23.8057 28.6588 23.9111C28.4703 24.0166 28.3118 24.1684 28.1984 24.3523L22.693 33.2391C22.5552 33.4619 22.4885 33.7214 22.5018 33.9831C22.515 34.2447 22.6076 34.4961 22.7672 34.7039Z" stroke="#343434" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M51.25 25L47.5 33.75M47.5 33.75L40 23.75L32.5 33.75M47.5 33.75L40 55L32.5 33.75M28.75 25L32.5 33.75" stroke="#343434" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              <h3 className="text-[#343434] font-semibold text-[32px] leading-[39px]">
                Our Values
              </h3>
              <p className="text-[#676767] text-lg sm:text-2xl leading-8 sm:leading-9 text-center">
                We value flexibility, community, and smart design to help people
                work better together.
              </p>
            </div>
            </HoverScale>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Franchise & Collaboration */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-[100px] overflow-hidden">
        <FadeInUp>
        <div
          className="hidden lg:block absolute w-[303px] h-[303px] left-1/2 translate-x-[130px] top-[460px] pointer-events-none"
          style={{ background: "rgba(29, 188, 231, 0.66)", filter: "blur(450px)" }}
          aria-hidden
        />
        <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-10 relative z-10">
          <FadeInUp delay={0.1}>
          <div className="text-center w-full max-w-[841px]">
            <p className="text-[#676767] text-lg sm:text-2xl leading-snug sm:leading-[29px] mb-2">
              Get In Touch
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-tight lg:leading-[78px]">
              <span className="text-[#343434]">Franchise & </span>
              <span className="text-primary">Collaboration</span>
            </h2>
          </div>
          </FadeInUp>

          <div className="w-full grid grid-cols-1 lg:grid-cols-[609px_591px] gap-8 lg:gap-10 items-start">
            {/* Contact form */}
            <div className="w-full p-6 rounded-2xl border border-[#A5A5A5] bg-white flex flex-col gap-6">
              <h3 className="text-[#343434] font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[59px]">
                Let&apos;s Grow <span className="text-primary">Together</span>
              </h3>
              <div className="flex flex-col gap-6">
                <p className="text-[#676767] text-lg sm:text-2xl leading-8 sm:leading-9">
                  Interested in partnering with Manvian Spaces? Share a few details and our team
                  will connect with you.
                </p>
                <form className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full h-[42px] px-4 border border-[#A5A5A5] rounded-lg text-[18px] text-[#676767] outline-none"
                  />

                  <div className="h-[44px] flex items-center border border-[#A5A5A5] rounded-lg overflow-hidden bg-white">
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
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#676767] pointer-events-none"
                        aria-hidden
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="w-px h-6 bg-[#A5A5A5]" aria-hidden />
                    <input
                      type="tel"
                      placeholder="Contact"
                      className="h-[44px] flex-1 px-4 text-[18px] text-[#676767] outline-none"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full h-[42px] px-4 border border-[#A5A5A5] rounded-lg text-[18px] text-[#676767] outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Organization / Company Name"
                    className="w-full h-[42px] px-4 border border-[#A5A5A5] rounded-lg text-[18px] text-[#676767] outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full h-[42px] px-4 border border-[#A5A5A5] rounded-lg text-[18px] text-[#676767] outline-none"
                  />
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full h-[110px] px-4 py-2 border border-[#A5A5A5] rounded-lg text-[18px] text-[#676767] resize-none outline-none"
                  />

                  <button
                    type="submit"
                    className="mx-auto w-[173px] h-[56px] bg-primary text-white font-semibold text-[20px] rounded-[32px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* Info & Connect */}
            <div className="w-full flex flex-col min-h-[750px]">
              <p className="text-[#676767] text-lg sm:text-2xl leading-8 sm:leading-9">
                Manvian Spaces is open to franchise partnerships and strategic collaborations
                with individuals, businesses, and organizations who share our vision of
                redefining workspaces.
                <br />
                <br />
                Whether you&apos;re looking to:
                <br />- Launch a Manvian Spaces franchise
                <br />- Collaborate on workspace development
                <br />- Partner for community events or business growth
                <br />
                <br />
                We&apos;re always excited to explore opportunities that create mutual value and
                long-term impact.
              </p>

              <div className="mt-auto pt-10">
                <h4 className="text-[#343434] font-semibold text-[32px] leading-9 mb-6">
                  Connect with us
                </h4>
                <div className="flex gap-6">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[60px] h-[60px] rounded-[32px] bg-primary flex items-center justify-center shrink-0"
                    aria-label="Facebook"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[60px] h-[60px] rounded-[32px] bg-primary flex items-center justify-center shrink-0"
                    aria-label="LinkedIn"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[60px] h-[60px] rounded-[32px] bg-primary flex items-center justify-center shrink-0"
                    aria-label="Instagram"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </FadeInUp>
      </section>

      <Footer />
    </div>
  );
}
