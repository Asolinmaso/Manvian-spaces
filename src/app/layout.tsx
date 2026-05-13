import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "M SPACE | Manvian Spaces - Flexible Workspaces",
  description:
    "Flexible work-spaces for every need. Co-working, virtual offices, meeting rooms, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable} data-scroll-behavior="smooth">
      <body className="font-montserrat antialiased">{children}</body>
    </html>
  );
}
