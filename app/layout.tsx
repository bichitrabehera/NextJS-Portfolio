import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
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
          <main className="flex-1">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
