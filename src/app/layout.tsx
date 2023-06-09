import MainNavigation from "@/components/MainNavigation";
import "./globals.css";
import { Inter } from "next/font/google";

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
      <body>
        <MainNavigation />

        {children}
      </body>
    </html>
  );
}
