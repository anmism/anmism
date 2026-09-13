import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bapun Hansdah | @anmism - Full Stack Developer",
  description: "I take ideas from 0→1. Cofounder & CTO building products that ship. Full-stack developer specializing in AI, automation, and web apps.",
  keywords: ["Bapun Hansdah", "anmism", "full stack developer", "cofounder", "CTO", "AI", "automation", "web development"],
  authors: [{ name: "Bapun Hansdah", url: "https://anmism.com" }],
  creator: "Bapun Hansdah",
  metadataBase: new URL("https://anmism.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anmism.com",
    title: "Bapun Hansdah | @anmism - Full Stack Developer",
    description: "I take ideas from 0→1. Cofounder & CTO building products that ship.",
    siteName: "Anmism",
    images: [
      {
        url: "/meta.webp",
        width: 1200,
        height: 630,
        alt: "Bapun Hansdah - anmism",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bapun Hansdah | @anmism",
    description: "I take ideas from 0→1. Cofounder & CTO building products that ship.",
    creator: "@bapunhansdah7",
    images: ["/meta.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png" }],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${rubik.variable} h-full antialiased`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S0J3WM3KNG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S0J3WM3KNG');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
