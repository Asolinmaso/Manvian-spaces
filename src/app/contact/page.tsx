import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-white w-full overflow-x-hidden">
      {/* Decorative blurred ellipses */}
      <div
        className="absolute w-[220px] h-[220px] sm:w-[283px] sm:h-[283px] -left-14 top-[633px] opacity-60 pointer-events-none hidden sm:block"
        style={{ background: "rgba(29, 188, 231, 0.5)", filter: "blur(250px)" }}
        aria-hidden
      />
      <div
        className="absolute w-[220px] h-[220px] sm:w-[283px] sm:h-[283px] right-0 top-[1037px] opacity-50 pointer-events-none hidden sm:block"
        style={{ background: "rgba(29, 188, 231, 0.24)", filter: "blur(220px)" }}
        aria-hidden
      />
      <div
        className="absolute w-[220px] h-[220px] sm:w-[283px] sm:h-[283px] left-1/2 -translate-x-1/2 top-[1590px] opacity-50 pointer-events-none hidden sm:block"
        style={{ background: "rgba(29, 188, 231, 0.24)", filter: "blur(220px)" }}
        aria-hidden
      />


      {/* Hero / Banner */}
      <section className="relative w-full overflow-hidden min-h-[662px]">
        <div className="absolute inset-0 bg-black/60" />
        <Image
          src="/images/Contact_Banner.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="relative z-10 pt-4 px-4 sm:px-6 lg:px-[100px]">
          <Header activePage="Contact" inBanner />
        </div>
        <div className="relative z-10 min-h-[420px] sm:min-h-[400px] flex flex-col items-center justify-center text-center px-4 sm:px-6 -mt-4">
          <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-semibold leading-tight lg:leading-[78px] text-white max-w-[586px]">
            Get in <span className="text-primary">Touch</span>
            <br />
            With Our <span className="text-primary">Team</span>
          </h1>
          <p className="mt-5 text-white/90 text-base sm:text-xl lg:text-2xl leading-7 sm:leading-8 max-w-[804px]">
            Have questions, need pricing details, or want to book a workspace?
            <br className="hidden sm:block" />
            We&apos;re here to help you find the perfect space.
          </p>
         
        </div>
      </section>

      {/* Form + Info card */}
      <section className="relative px-4 sm:px-6 lg:px-[100px] py-12 sm:py-16">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Form */}
          <div className="w-full">
            <ContactForm />
          </div>

          {/* Info card */}
          <div
            className="w-full rounded-2xl p-6 sm:p-8 text-white"
            style={{
              background:
                "linear-gradient(244.72deg, #9CEAFF -57.88%, #1DBCE7 99.82%)",
            }}
          >
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-lg sm:text-2xl font-semibold leading-[29px]">
                  Contact
                </h3>
                <p className="mt-2 text-white/80 text-base sm:text-2xl leading-7 sm:leading-[29px] break-words">
                  +91 - 8778359643
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-semibold leading-[29px]">
                  Email
                </h3>
                <p className="mt-2 text-white/80 text-base sm:text-2xl leading-7 sm:leading-[29px] break-words">
                  manvianspaces@gmail.com
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-semibold leading-[29px]">
                  Address
                </h3>
                <p className="mt-2 text-white/80 text-base sm:text-2xl leading-7 sm:leading-[29px]">
                  1st floor, No.4, Alamathi main road, New vellanur, Avadi,
                  Chennai-600062
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative px-4 sm:px-6 lg:px-[100px] pb-20">
        <div className="max-w-[1240px] mx-auto">
          <div className="relative w-full overflow-hidden rounded-2xl border border-black/10">
            <div className="absolute inset-0 bg-black/10 pointer-events-none" aria-hidden />
            <iframe
              title="Manvian Spaces location map"
              src="https://www.google.com/maps?q=Avadi%20Chennai%20600062&output=embed"
              className="w-full h-[320px] sm:h-[380px] lg:h-[472px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

