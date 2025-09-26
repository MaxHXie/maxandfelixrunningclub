import type { Metadata } from "next";
import Ad from "./Ad";

export const metadata: Metadata = {
  title: "Max and Felix running club",
  description: "Weekly Tuesday runs at Stockholm Stadion. Join us!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/runs/ad1.png" />
        <link rel="preload" as="image" href="/runs/ad2.png" />
        <link rel="preload" as="image" href="/runs/ad3.png" />
        <link rel="preload" as="image" href="/runs/ad4.png" />
      </head>
      <body>
        {children}
        <Ad />
      </body>
    </html>
  );
}
