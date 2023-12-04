import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ArgenTV",
  description: "La única grilla de streaming de la television Argentina",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
