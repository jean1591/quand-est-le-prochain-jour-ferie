import "./globals.css";

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
        className={classNames(inter.className, "bg-blue-50/25 text-blue-900")}
      >
        <div className="my-16 px-4 sm:px-0 mx-auto max-w-5xl">{children}</div>
      </body>
    </html>
  );
}
