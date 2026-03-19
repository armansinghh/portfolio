import "@/styles/globals.css";
import {
  ThemeProvider,
  GlobalModalProvider,
  Providers,
} from "@/components/providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Meowl } from "@/components/Meowl";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                try {
                  const theme = localStorage.getItem('theme') || 'system';
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  const appliedTheme = theme === 'system' ? systemTheme : theme;
                  document.documentElement.classList.add(appliedTheme);
                } catch (e) {}
              `,
          }}
        />
      </head>
      <body>
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
