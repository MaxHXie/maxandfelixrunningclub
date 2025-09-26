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
      <body>
        {children}
        <Ad />
      </body>
    </html>
  );
}
