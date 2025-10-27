import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// 🪶 Load fonts from Google via Next.js
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Waymor Advisory",
  description:
    "Waymor Advisory is a financial advisory firm helping clients build sustainable financial growth and smart investment strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[--color-background] text-[--color-foreground]">
        {children}
      </body>
    </html>
  );
}
