import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verwaltungssysteme verstehen | Digitale Prozesse, Vorteile & Umsetzung",
  description:
    "Informationsseite zu digitalen Verwaltungssystemen: warum Unternehmen davon profitieren, welche Prozesse automatisiert werden und wie wir passende Systeme planen und umsetzen.",
  keywords:
    "Verwaltungssysteme, digitales Verwaltungssystem, Prozessautomatisierung, CRM, Rechnungen, Dokumentenverwaltung, Kundenverwaltung, Terminverwaltung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
