import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SSRProvider } from "../components/boostrap/boostrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WOOF APP",
  description:
    "A comprehensive application that provides information about dog breeds, grooming, and health, helping you become an expert in taking care of your four-legged friend.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SSRProvider>{children}</SSRProvider>
      </body>
    </html>
  );
}
