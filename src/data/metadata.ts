import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://armansingh.me"),

  title: {
    default: "Arman Singh — Frontend Developer",
    template: "%s | Arman Singh",
  },

  description:
    "Frontend developer building modern web applications and experimenting with AI and machine learning.",

  keywords: [
    "Arman Singh",
    "Arman Singh Portfolio",
    "Frontend Developer",
    "Frontend Developer India",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Web Developer Portfolio",
  ],

  authors: [{ name: "Arman Singh", url: "https://armansingh.me" }],
  creator: "Arman Singh",
  publisher: "Arman Singh",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" }
    ],
  },

  openGraph: {
    title: "Arman Singh — Frontend Developer",
    description:
      "Frontend developer building modern web applications with a focus on performance, clean design, and usability.",
    url: "https://armansingh.me",
    siteName: "Arman Singh Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Arman Singh Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Arman Singh — Frontend Developer",
    description:
      "Frontend developer building modern web applications with a focus on performance, clean design, and usability.",
    images: ["/og.png"],
    creator: "@_armansingh",
  },
};