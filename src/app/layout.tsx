import type { Metadata } from "next";
import { Poiret_One } from "next/font/google";
import "./globals.css";

export const poiret = Poiret_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-poiret',
});

export const metadata: Metadata = {
  title: "Villa Amarilla",
  description: "Luxury villa rental in Costa del Sol, Spain. Experience the perfect blend of comfort and elegance in our stunning property.",
  icons: {
    icon: '/villa-icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/villa-iconsvg" />
      </head>
      <body
        className={`${poiret.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
