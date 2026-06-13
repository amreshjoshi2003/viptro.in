import "./globals.css";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}