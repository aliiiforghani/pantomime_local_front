import MainNavigation from "@/components/MainNavigation";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "بازی پانتومیم",
  description: "پیشنهاد های جذاب برای ادا بازی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className=" bg-gradient-to-t from-indigo-400 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... ">
        <Providers>
          <MainNavigation />
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
