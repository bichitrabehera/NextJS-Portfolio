import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import TimeLocation from "@/components/ui/TimeLocation";
import { metadata } from "@/data/metadata";
export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <SmoothScrollProvider>
          <TimeLocation/>
          <main className="flex-1 " style={{ lineHeight: 2, wordSpacing: "0.1em", letterSpacing: "0.015em", fontSize: "16px" }}>{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
