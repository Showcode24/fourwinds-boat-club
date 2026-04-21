import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fourwinds Boat Club - Premium Yacht Club Membership",
  description:
    "Exclusive luxury yacht club offering premium vessel charters, memberships, and maritime experiences. Join our distinguished community of yacht enthusiasts.",
  icons: {
    icon: [
      {
        url: "/images/img/club-logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/img/club-logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/img/club-logo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/images/img/club-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
