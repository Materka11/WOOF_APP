import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { BS_Container, SSRProvider } from "../components/boostrap/boostrap";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.scss";

import Footer from "../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WOOF APP",
  description:
    "A comprehensive application that provides information about dog breeds, grooming, and health, helping you become an expert in taking care of your four-legged friend.",
  icons: {
    icon: "dog.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-light bg-dark`}>
        <SSRProvider>
          <BS_Container className="my-5">{children}</BS_Container>
          <Footer />
        </SSRProvider>
      </body>
    </html>
  );
}
