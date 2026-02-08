import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="relative min-h-screen bg-white w-full">
      <Header activePage="About" />

      {/* Frame 1321314791 - Banner: h 431px, starts right after nav (no top gap) */}
      <section className="relative w-full overflow-hidden">
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
      </section>

      {/* Frame 1321314852 - About text block: top 713px, below banner (40px gap) */}
      <section className="relative w-full mt-10 px-4 sm:px-6 lg:px-[100px] max-w-[1440px] mx-auto">
        <div className="max-w-[1240px] mx-auto grid gap-8 lg:grid-cols-2 items-start">
          <div className="flex flex-col">
            <p className="text-[#676767] text-lg sm:text-2xl leading-snug sm:leading-[29px] mb-2">
              About Manvian Micro Spaces
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-tight lg:leading-[78px] text-[#343434]">
              A <span className="text-primary">Space</span> for Ideas to{" "}
              <span className="text-primary">Grow</span>
            </h1>
          </div>
          <p className="text-[#676767] text-lg sm:text-2xl leading-8 sm:leading-9">
            Manvian Spaces is more than a coworking space—it&apos;s a thoughtfully
            designed ecosystem for creators, startups, freelancers, and growing
            teams. Built to inspire ideas, encourage collaboration, and support
            smarter ways of working.
          </p>
        </div>
      </section>

      {/* Purpose, Vision & Direction */}
      <section
        className="relative py-20 px-4"
        style={{ background: "rgba(29, 188, 231, 0.04)" }}
      >
        <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-10">
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
          <div className="flex flex-wrap justify-center gap-8">
            {/* Our Vision - blue card */}
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
            {/* Our Mission - white card */}
            <div className="w-full max-w-[382px] p-4 rounded-[24px] bg-white/50 border border-[#676767] flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full border-2 border-[#343434] flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#343434" strokeWidth="2" strokeLinecap="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </div>
              <h3 className="text-[#343434] font-semibold text-[32px] leading-[39px]">
                Our Mission
              </h3>
              <p className="text-[#676767] text-lg sm:text-2xl leading-8 sm:leading-9 text-center">
                To deliver flexible, well-designed workspaces that enhance
                productivity, creativity, and meaningful collaboration.
              </p>
            </div>
            {/* Our Values - white card */}
            <div className="w-full max-w-[382px] p-4 rounded-[24px] bg-white/50 border border-[#676767] flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full border-2 border-[#343434] flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#343434" strokeWidth="2" strokeLinecap="round">
                  <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
                  <path d="M12 8v8M8 12h8" />
                </svg>
              </div>
              <h3 className="text-[#343434] font-semibold text-[32px] leading-[39px]">
                Our Values
              </h3>
              <p className="text-[#676767] text-lg sm:text-2xl leading-8 sm:leading-9 text-center">
                We value flexibility, community, and smart design to help people
                work better together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise & Collaboration */}
      <section className="relative py-20 px-4">
        <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-10">
          <div className="text-center">
            <p className="text-[#676767] text-lg sm:text-2xl leading-snug sm:leading-[29px] mb-2">
              Get In Touch
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-tight lg:leading-[78px]">
              <span className="text-[#343434]">Franchise & </span>
              <span className="text-primary">Collaboration</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-8 w-full justify-center">
            {/* Contact form */}
            <div className="w-full max-w-[609px] p-6 rounded-2xl border border-[#A5A5A5] bg-white flex flex-col gap-6">
              <h3 className="text-[#343434] font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[59px]">
                Let&apos;s Grow <span className="text-primary">Together</span>
              </h3>
              <p className="text-[#676767] text-lg sm:text-2xl leading-8 sm:leading-9">
                Interested in partnering with Manvian Spaces? Share a few details
                and our team will connect with you.
              </p>
              <form className="flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-[#A5A5A5] rounded-lg text-[18px] text-[#676767]"
                />
                <input
                  type="tel"
                  placeholder="Tel + Contact"
                  className="w-full px-4 py-3 border border-[#A5A5A5] rounded-lg text-[18px] text-[#676767]"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full px-4 py-3 border border-[#A5A5A5] rounded-lg text-[18px] text-[#676767]"
                />
                <input
                  type="text"
                  placeholder="Organization / Company Name"
                  className="w-full px-4 py-3 border border-[#A5A5A5] rounded-lg text-[18px] text-[#676767]"
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full px-4 py-3 border border-[#A5A5A5] rounded-lg text-[18px] text-[#676767]"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-[#A5A5A5] rounded-lg text-[18px] text-[#676767] resize-none"
                />
                <button
                  type="submit"
                  className="w-fit px-6 py-4 bg-primary text-white font-semibold text-[20px] rounded-[32px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity"
                >
                  Submit
                </button>
              </form>
            </div>
            {/* Info & Connect */}
            <div className="w-full max-w-[591px] flex flex-col gap-6">
              <p className="text-[#676767] text-lg sm:text-2xl leading-8 sm:leading-9">
                Manvian Spaces is open to franchise partnerships and strategic
                collaborations with individuals, businesses, and organizations
                who share our vision of redefining workspaces. Whether
                you&apos;re looking to: Launch a Manvian Spaces franchise,
                Collaborate on workspace development, Partner for community
                events or business growth. We&apos;re always excited to explore
                opportunities that create mutual value and long-term impact.
              </p>
              <div>
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
      </section>

      <Footer />
    </div>
  );
}
