import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "His Life Metro",
  description: "LOVE GOD. MAKE DISCIPLES. IMPACT OUR WORLD.",
  // icons: {
  //   icon: "/assets/icons/logo-icon.svg",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen ", fontSans.variable)}>
        <div>{children}</div>
      </body>
    </html>
  );
}
