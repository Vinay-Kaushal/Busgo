import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BusGo — Book Bus Tickets Solo or With Your Group",
  description:
    "India's leading group bus booking platform. Smart, fast and modern booking experience for solo and group travel.",
  keywords: ["bus booking", "group travel", "bus tickets", "BusGo", "India travel"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${plusJakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
