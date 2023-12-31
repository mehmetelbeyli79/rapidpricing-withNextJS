import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./GlobalState/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rapidly Price App With Next.js",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-200`}>
        <div className="bg-gray-950 h-10 flex w-full"></div>
        <h2 className="sm:text-9xl text-6xl text-center mt-5">&</h2>
        <h2 className="sm:text-5xl text-2xl text-center mt-5">RAPID PRICE APP</h2>
        <Providers>{children}</Providers>
        <div className="bg-gray-950 h-10 flex w-full text-white text-sm items-center pl-3">Design & Developed By Mehmet ELBEYLİ</div>
      </body>
    </html>
  );
}
