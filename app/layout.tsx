import "./globals.css";
import { metadata } from "@/data/metadata";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
