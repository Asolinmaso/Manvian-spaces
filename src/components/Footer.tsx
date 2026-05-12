import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative w-full">
      <div className="relative w-full h-[110px] sm:h-[220px] lg:h-[476px] shrink-0 z-10">
        <Image
          src="/images/Footer_top.png"
          alt=""
          fill
          className="object-cover object-top w-full"
          sizes="100vw"
        />
      </div>
      <div
        className="relative -mt-16 sm:-mt-24 lg:-mt-[159px] pt-24 sm:pt-32 lg:pt-[200px] pb-12 sm:pb-16 px-4 sm:px-6 lg:px-[100px]"
        style={{
          background: "linear-gradient(90deg, #42CCFF 0%, #0883D7 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          <div>
            <h3 className="text-white text-2xl sm:text-3xl lg:text-[40px] font-medium leading-tight lg:leading-[48px] mb-6 sm:mb-8 max-w-[541px]">
              Flexible Work-spaces for Every Need.
            </h3>
            <div className="hidden md:flex gap-4 sm:gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm hover:opacity-90 transition-opacity" aria-label="Facebook">
                <Image src="/images/fb.png" alt="Facebook" width={25} height={25} className="w-6 h-6 sm:w-[25px] sm:h-[25px] object-contain" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm hover:opacity-90 transition-opacity" aria-label="LinkedIn">
                <Image src="/images/linkedin.png" alt="LinkedIn" width={25} height={25} className="w-6 h-6 sm:w-[25px] sm:h-[25px] object-contain" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm hover:opacity-90 transition-opacity" aria-label="Instagram">
                <Image src="/images/insta.png" alt="Instagram" width={25} height={25} className="w-6 h-6 sm:w-[25px] sm:h-[25px] object-contain" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium text-lg sm:text-2xl mb-4 sm:mb-6">
              Quick Links
            </h4>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-white text-base sm:text-[20px] leading-6 font-normal hover:underline">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-white font-medium text-lg sm:text-2xl mb-4 sm:mb-6">
                Address
              </h4>
              <p className="text-white text-base sm:text-[20px] leading-7 font-normal max-w-[380px]">
                No.4, 1st floor, Alamathi main road, New vellanur, Avadi, Chennai-600062
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium text-lg sm:text-2xl mb-4 sm:mb-6">
                Contact
              </h4>
              <div className="flex flex-col gap-2 sm:gap-4">
                <a href="mailto:manvianspaces@gmail.com" className="text-white text-[15px] sm:text-[20px] leading-6 font-normal hover:underline break-words">manvianspaces@gmail.com</a>
                <a href="tel:+918778359643" className="text-white text-[15px] sm:text-[20px] leading-6 font-normal hover:underline">+91 - 8778359643</a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden flex gap-5 mt-6 mb-2 w-full">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-[46px] h-[46px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm hover:opacity-90 transition-opacity" aria-label="Facebook">
            <Image src="/images/fb.png" alt="Facebook" width={20} height={20} className="w-[20px] h-[20px] object-contain" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-[46px] h-[46px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm hover:opacity-90 transition-opacity" aria-label="LinkedIn">
            <Image src="/images/linkedin.png" alt="LinkedIn" width={20} height={20} className="w-[20px] h-[20px] object-contain" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-[46px] h-[46px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm hover:opacity-90 transition-opacity" aria-label="Instagram">
            <Image src="/images/insta.png" alt="Instagram" width={20} height={20} className="w-[20px] h-[20px] object-contain" />
          </a>
        </div>
        <div className="max-w-[1240px] mx-auto w-full border-t border-white mt-6 pt-6">
          <p className="text-left md:text-center text-white text-sm sm:text-[20px] leading-6 font-normal">
            © Manvian Spaces – All rights reserved <br className="md:hidden" />
            design and developed by manvian
          </p>
        </div>
      </div>
    </footer>
  );
}
