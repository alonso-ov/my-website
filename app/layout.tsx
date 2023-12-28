import type { Metadata } from 'next';
import { cn } from "@/lib/utils";
import { Noto_Sans as FontSans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "@/components/root/theme-provider";
import NavBar from "@/components/root/nav-bar";
import Footer from "@/components/root/footer";

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
          <main className="flex flex-col items-center justify-between min-h-full p-4">
            {children}
          </main>
          <Footer />
        </ThemeProvider></body>
    </html>
  )
}
