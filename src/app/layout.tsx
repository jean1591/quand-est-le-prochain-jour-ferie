import "./globals.css";

import { Hero } from "./component/Hero";
import { Inter } from "next/font/google";
import { classNames } from "@/utils";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={classNames(inter.className, "bg-green-50/10 text-green-950")}
      >
        <Hero />

        <div className="my-16 mx-auto max-w-5xl">{children}</div>
      </body>
    </html>
  );
}
