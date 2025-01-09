import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "./components/header/Header";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GetEstate",
  description: "A next generation real estate website, for easy no sweat rent and purchase solutions",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
