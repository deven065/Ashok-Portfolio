import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Background from "./components/Background";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ashok | Data Analyst Portfolio",
  description:
    "Data-driven insights, dashboards, and analytics solutions by Ashok. Portfolio, experience, and contact.",
  keywords: [
    "Ashok",
    "Data Analyst",
    "Analytics",
    "Dashboard",
    "Power BI",
    "Tableau",
    "SQL",
    "Portfolio",
  ],
  openGraph: {
    title: "Ashok | Data Analyst Portfolio",
    description:
      "Data-driven insights, dashboards, and analytics solutions by Ashok.",
    type: "website",
    url: "https://example.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${poppins.variable} ${inter.variable} antialiased relative`}
        suppressHydrationWarning
      >
        <Background />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
