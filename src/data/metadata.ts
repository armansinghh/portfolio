import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://armansingh.me"),

  title: {
    default: "Arman Singh - AI & DS Student | ML + Web Development",
    template: "%s | Arman Singh",
  },

  description:
    "Arman Singh is a B.Tech AI & Data Science student from Gwalior, India. " +
    "Building ML models with PyTorch, working on CRNN architectures, and " +
    "shipping them as Next.js web applications. Open for AI/ML & Web Development internships.",

  keywords: [
    "Arman Singh",
    "Arman Singh Portfolio",
    "AI & DS Student",
    "Machine Learning Engineer",
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
    title: "Arman Singh - AI & DS Student | ML + Web Development",
    description:
      "Arman Singh is a B.Tech AI & Data Science student from Gwalior, India. " +
      "Building ML models with PyTorch, working on CRNN architectures, and " +
      "shipping them as Next.js web applications. Open for AI/ML & Web Development internships.",
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
    title: "Arman Singh - AI & DS Student",
    description:
      "Arman Singh is a B.Tech AI & Data Science student from Gwalior, India. " +
      "Building ML models with PyTorch, working on CRNN architectures, and " +
      "shipping them as Next.js web applications. Open for AI/ML & Web Development internships.",
    images: ["/og.png"],
    creator: "@_armansingh",
  },
};