import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaPay - Modern Payment Processing",
  description: "Instant transfers, fraud protection, and global coverage for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
