import "@/styles/globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Arman Singh",
  description: "Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <div className="mx-auto max-w-2xl px-5 sm:px-6 lg:px-8 flex flex-col pt-12 min-h-screen">

          <Navbar />

          <main className="grow">
            {children}
          </main>

          <Footer />

        </div>

      </body>
    </html>
  );
}