import type { Metadata } from "next";
import { Amaranth, Lato } from "next/font/google";
import "./globals.css";
import CookieConsentWrapper from "@/src/components/cookie/CookieConsentWrapper";
import { AppDataProvider } from "@/src/context/AppDataContext";
import TopNavbar from "@/src/components/v2/navbar/TopNavbar";
import Footer from "@/src/components/footer/Footer";
import { ToastProvider } from "@/src/context/ToastContext";

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
});

const amaranth = Amaranth({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-amaranth",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Outbound Travelers",
  description: "Travel consultancy in India for outbound trips.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="outbound">
      <body
        suppressHydrationWarning
        className={`${lato.variable} ${amaranth.variable} antialiased`}
      >
        <ToastProvider>
          <TopNavbar />
          <AppDataProvider>{children}</AppDataProvider>
          <CookieConsentWrapper />
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
