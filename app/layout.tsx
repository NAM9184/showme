import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next",
  description: "남동현 메인페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
