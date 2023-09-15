import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "K-글자 수 계산기",
  description:
    "심플한 K-글자 수 계산기, 글자 수 계산, 글자 수 카운터, 글자 세기, 글자 바이트 계산기, NEIS 글자 수 계산기",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body>{children}</body>
    </html>
  );
}
