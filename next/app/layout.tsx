import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
