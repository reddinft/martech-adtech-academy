import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MarTech + AdTech Academy",
  description: "Harvard-style learning modules for MarTech and AdTech operators",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
