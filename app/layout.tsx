import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farid Ardiansyah",
  description:
    "Minat saya terletak pada merancang, mengelola, dan mengembangkan produk, dan lain-lain yang memecahkan masalah dunia nyata. Mari kita wujudkan ide-ide tersebut!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex min-h-dvh flex-col items-center`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>

      {process.env.NODE_ENV === "production" && (
        <Script
          defer
          src="https://us.umami.is/script.js"
          data-website-id="6cd7c9fb-1502-4845-954e-2a3040f81a40"
        />
      )}
    </html>
  );
}
