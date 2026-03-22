import { JetBrains_Mono, DM_Sans } from "next/font/google";
import { Geist } from "next/font/google";

import "@/styles/globals.css";

import {
  ThemeProvider,
  GlobalModalProvider,
  Providers,
} from "@/components/providers";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Meowl } from "@/components/Meowl";

import { cn } from "@/lib/utils";
import Script from "next/script";

import { siteMetadata } from "@/data/metadata";

export const metadata = siteMetadata;

/* ================= FONTS ================= */
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: true,
  fallback: ["monospace"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

/* ================= LAYOUT ================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <body>
        {/*FIXED: theme script via Next Script */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              const theme = localStorage.getItem('theme') || 'system';
              const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              const appliedTheme = theme === 'system' ? systemTheme : theme;
              document.documentElement.classList.add(appliedTheme);
            } catch (e) {}
          `}
        </Script>

        <Providers>
          <ThemeProvider>
            <GlobalModalProvider>
              <Meowl />

              <div className="mx-auto max-w-2xl px-5 sm:px-6 lg:px-8 flex flex-col pt-12 min-h-screen">
                <Navbar />

                <main className="grow">{children}</main>

                <Footer />
              </div>
            </GlobalModalProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}