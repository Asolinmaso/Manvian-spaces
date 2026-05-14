import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutContactForm from "@/components/AboutContactForm";
import {
  FadeInUp,
  ImageReveal,
  StaggerContainer,
  StaggerItem,
  HoverScale,
} from "@/components/animations";

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
        <div className="max-w-[1240px] mx-auto grid gap-8 lg:gap-16 lg:grid-cols-2 items-baseline">
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
                <span className="text-primary">Purpose, </span>
                <span className="text-[#343434]">Vision & </span>
                <span className="text-primary">Direction</span>
              </h2>
            </div>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 w-full" staggerDelay={0.15}>
            <StaggerItem className="h-full">
              <HoverScale className="h-full">
                <div className="group w-full p-8 rounded-[24px] bg-white/50 border border-[#676767] hover:bg-primary hover:border-transparent hover:shadow-[10px_10px_32px_rgba(0,0,0,0.25)] transition-all duration-300 flex flex-col items-center gap-4 cursor-pointer h-full justify-start">
                  <div className="w-20 h-20 rounded-full border border-[#343434] bg-transparent group-hover:bg-white group-hover:border-transparent flex items-center justify-center transition-all duration-300 shrink-0">
                    <Image
                      src="/images/vision.png"
                      alt="Our Vision"
                      width={32}
                      height={32}
                      className="object-contain transition-all duration-300 brightness-0 opacity-60 group-hover:brightness-100 group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="text-[#343434] group-hover:text-white font-semibold text-[32px] leading-[39px] transition-colors duration-300">
                    Our Vision
                  </h3>
                  <p className="text-[#676767] group-hover:text-white text-lg sm:text-2xl leading-8 sm:leading-9 text-center transition-colors duration-300">
                    To shape the future of work through inspiring spaces that empower
                    people and businesses.
                  </p>
                </div>
              </HoverScale>
            </StaggerItem>
            <StaggerItem className="h-full">
              <HoverScale className="h-full">
                <div className="group w-full p-8 rounded-[24px] bg-white/50 border border-[#676767] hover:bg-primary hover:border-transparent hover:shadow-[10px_10px_32px_rgba(0,0,0,0.25)] transition-all duration-300 flex flex-col items-center gap-4 cursor-pointer h-full justify-start">
                  <div className="w-20 h-20 rounded-full border border-[#343434] bg-transparent group-hover:bg-white group-hover:border-transparent flex items-center justify-center transition-all duration-300 shrink-0 text-[#343434] group-hover:text-primary">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
                      <path d="M56.0789 24.2041C56.0656 24.14 56.0343 24.081 55.9886 24.0341C55.9429 23.9872 55.8848 23.9543 55.8211 23.9393C51.5726 22.9002 41.7586 26.6026 36.4359 31.9213C35.4873 32.8622 34.6223 33.8837 33.8507 34.9744C32.2101 34.826 30.5695 34.951 29.1726 35.5604C25.2281 37.2948 24.0804 41.8244 23.7601 43.769C23.7428 43.8755 23.7502 43.9846 23.7818 44.0879C23.8134 44.1911 23.8683 44.2856 23.9424 44.3642C24.0164 44.4428 24.1075 44.5033 24.2087 44.5409C24.3099 44.5786 24.4184 44.5925 24.5257 44.5815L30.8593 43.8862C30.8637 44.3639 30.8924 44.8411 30.9453 45.3159C30.9783 45.644 31.1248 45.9504 31.3593 46.1823L33.8117 48.6346C34.0437 48.8694 34.3504 49.0158 34.6789 49.0487C35.1508 49.1013 35.6251 49.13 36.1 49.1346L35.4054 55.4627C35.3946 55.57 35.4086 55.6783 35.4462 55.7793C35.4839 55.8803 35.5443 55.9713 35.6228 56.0452C35.7013 56.1191 35.7957 56.174 35.8987 56.2056C36.0018 56.2373 36.1107 56.2448 36.2172 56.2276C38.1625 55.9151 42.7015 54.7674 44.4257 50.8237C45.0351 49.4252 45.1601 47.7932 45.0195 46.1604C46.1134 45.3895 47.1379 44.5245 48.0812 43.5752C53.4234 38.2627 57.1023 28.6643 56.0789 24.2041ZM43.3328 36.6932C42.8662 36.2267 42.5484 35.6323 42.4196 34.9852C42.2908 34.338 42.3568 33.6672 42.6093 33.0576C42.8618 32.448 43.2893 31.927 43.8379 31.5604C44.3866 31.1938 45.0316 30.9981 45.6914 30.9981C46.3512 30.9981 46.9962 31.1938 47.5448 31.5604C48.0934 31.927 48.521 32.448 48.7734 33.0576C49.0259 33.6672 49.0919 34.338 48.9632 34.9852C48.8344 35.6323 48.5166 36.2267 48.05 36.6932C47.7405 37.0034 47.3728 37.2494 46.9681 37.4173C46.5634 37.5852 46.1295 37.6716 45.6914 37.6716C45.2532 37.6716 44.8193 37.5852 44.4146 37.4173C44.0099 37.2494 43.6423 37.0034 43.3328 36.6932Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M28.5656 47.5C27.7868 47.5956 27.0623 47.9487 26.507 48.5031C25.1305 49.8844 25 55 25 55C25 55 30.1187 54.8695 31.4961 53.4914C32.0528 52.9371 32.4065 52.2113 32.5 51.4313" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-[#343434] group-hover:text-white font-semibold text-[32px] leading-[39px] transition-colors duration-300">
                    Our Mission
                  </h3>
                  <p className="text-[#676767] group-hover:text-white text-lg sm:text-2xl leading-8 sm:leading-9 text-center transition-colors duration-300">
                    To deliver flexible, well-designed workspaces that enhance
                    productivity, creativity, and meaningful collaboration.
                  </p>
                </div>
              </HoverScale>
            </StaggerItem>
            <StaggerItem className="h-full">
              <HoverScale className="h-full">
                <div className="group w-full p-8 rounded-[24px] bg-white/50 border border-[#676767] hover:bg-primary hover:border-transparent hover:shadow-[10px_10px_32px_rgba(0,0,0,0.25)] transition-all duration-300 flex flex-col items-center gap-4 cursor-pointer h-full justify-start">
                  <div className="w-20 h-20 rounded-full border border-[#343434] bg-transparent group-hover:bg-white group-hover:border-transparent flex items-center justify-center transition-all duration-300 shrink-0 text-[#343434] group-hover:text-primary">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                      <path d="M6 3h12l4 6-10 12L2 9l4-6Z" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11 3L8 9l4 12 4-12-3-6" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 9h20" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-[#343434] group-hover:text-white font-semibold text-[32px] leading-[39px] transition-colors duration-300">
                    Our Values
                  </h3>
                  <p className="text-[#676767] group-hover:text-white text-lg sm:text-2xl leading-8 sm:leading-9 text-center transition-colors duration-300">
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

            <div className="w-full grid grid-cols-1 lg:grid-cols-[609px_591px] gap-8 lg:gap-16 items-baseline">
              {/* Contact form */}
              <div className="w-full p-6 rounded-2xl border border-[#A5A5A5] bg-white flex flex-col gap-6">
                <h3 className="text-[#343434] font-semibold text-[22px] sm:text-4xl lg:text-[48px] leading-tight lg:leading-[59px] whitespace-nowrap sm:whitespace-normal tracking-tight">
                  Let&apos;s Grow <span className="text-primary">Together</span>
                </h3>
                <div className="flex flex-col gap-3 sm:gap-6">
                  <p className="text-[#676767] text-[15px] sm:text-2xl leading-[24px] sm:leading-9">
                    Interested in partnering with Manvian Spaces? Share a few details and our team
                    will connect with you.
                  </p>
                  <AboutContactForm />
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
                  <h4 className="text-[#343434] font-semibold text-[18px] sm:text-[32px] leading-tight sm:leading-9 mb-4 sm:mb-6">
                    Connect with us
                  </h4>
                  <div className="flex gap-4 sm:gap-6">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-full bg-primary flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
                      aria-label="Facebook"
                    >
                      <Image src="/images/fb.png" alt="Facebook" width={26} height={26} className="w-[18px] h-[18px] sm:w-[26px] sm:h-[26px] object-contain brightness-0 invert" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-full bg-primary flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
                      aria-label="LinkedIn"
                    >
                      <Image src="/images/linkedin.png" alt="LinkedIn" width={26} height={26} className="w-[18px] h-[18px] sm:w-[26px] sm:h-[26px] object-contain brightness-0 invert" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-full bg-primary flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
                      aria-label="Instagram"
                    >
                      <Image src="/images/insta.png" alt="Instagram" width={26} height={26} className="w-[18px] h-[18px] sm:w-[26px] sm:h-[26px] object-contain brightness-0 invert" />
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
