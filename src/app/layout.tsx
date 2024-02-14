import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "부산대학교 수강신청시스템 아님",
  description: "부산대학교의 수강신청을 연습할 수 있는 모의 수강신청 서비스",
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