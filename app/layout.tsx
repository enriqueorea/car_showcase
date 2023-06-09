import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Car Hubber",
  description:
    " Car Hubber is a car rental service that provides a seamless experience for users to rent a car.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
