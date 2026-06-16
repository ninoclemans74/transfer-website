import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Private Driver Service",
    template: "%s",
  },
  description:
    "Premium private driver and car pickup service for airport transfers, city rides, and executive travel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} bg-white text-black antialiased`}>
        {children}
      </body>
    </html>
  );
}
