import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ArgenTV",
  description: "La única grilla de streaming de la television Argentina",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black pb-12`}>
        <Navbar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
