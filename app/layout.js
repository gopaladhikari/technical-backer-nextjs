import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const rotobo = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Home | Technical Backer",
  description: "Technical Backer, a leading software company in India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
      </head>
      <body suppressHydrationWarning className={rotobo.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
