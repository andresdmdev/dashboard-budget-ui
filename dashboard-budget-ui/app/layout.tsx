import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SideBar from "./ui/sidebar/sidebar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard-Budget",
  description: "Dashboard to save and check budget",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased w-full h-full">
      <body className={`${montserrat.className} text-slate-100 bg-slate-900`}>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
