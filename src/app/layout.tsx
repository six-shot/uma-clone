import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const halyardDisplay = localFont({
  src: "../../public/fonts/fonnts.com-Halyard_Display.otf",
  variable: "--font-halyard-display",
});

export const metadata: Metadata = {
  title: "Uma Clone",
  description: "Uma Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${halyardDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
