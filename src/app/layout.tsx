import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { roboto } from "../../public/fonts/Roboto";
import Header from "../components/HOC/Header";
import Footer from "../components/HOC/Footer";
import Providers from "@/lib/providers";
import "./styles/globals.css";
import "./styles/home.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Signs Connect",
  description: "Application de traduction de langue des signes française",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Providers>
        <body className={roboto.variable}>{children}</body>
      </Providers>
    </html>
  );
}
