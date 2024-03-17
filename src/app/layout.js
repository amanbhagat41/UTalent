import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

import { Toaster } from "../components/ui/toaster";
export const metadata = {
  title: "UTalent",
  description: "We are looking to revolutionize the Freelance market specifically for college students in hopes of growing student's skill sets, improving resumes/portfolios, and giving real-life applications in their respective fields. With UTalent we want to give the opportunities strictly to the younger generations.",
};


export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </>
  )
}
