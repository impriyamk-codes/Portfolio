import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "impriyam.k",
  description:
    "PRIYAM KUNDU",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="noise">{children}</body>
    </html>
  );
}
