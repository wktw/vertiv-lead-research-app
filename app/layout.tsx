import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Vertiv Lead Research App",
  description: "Evidence-based sales research for Vertiv 3-phase power portfolio"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
