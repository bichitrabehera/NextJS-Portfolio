import Navbar from "@/components/layout/Navbar";
import "./globals.css";
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
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
