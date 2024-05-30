import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Lexend } from "next/font/google";
import "./globals.css";

const inter = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HrPro Connect",
  description: "Get your right job or candidate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50`}>{children}</body>
    </html>
  );
}
