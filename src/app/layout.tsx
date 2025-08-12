import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oddiant Techlabs - IT & HR Consulting Firm",
  description:
    "Oddiant Techlabs is a bootstrapped consulting firm for IT, HR, Manpower & Recruitment, staffing services headquartered in Noida, India.",
      icons: {
    icon: [
      { url: "/images/logos/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/logos/favicon.png" },
    ],
  },
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
