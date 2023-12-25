import type { Metadata } from 'next';
import { cn } from "@/lib/utils";
import { Noto_Sans as FontSans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Alonso Ortiz',
  description: 'Personal portfolio of Alonso Ortiz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <div className="my-4">
            {children}
          </div>
          <Footer />
        </ThemeProvider></body>
    </html>
  )
}
