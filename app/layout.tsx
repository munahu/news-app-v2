import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MH News",
  description: "Get the latest news.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">{children}</body>
    </html>
  );
}
