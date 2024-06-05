import "./globals.css";

import { Footer } from "./component/footer";
import { Inter } from "next/font/google";
import { NavBar } from "./component/navBar";
import { classNames } from "@/utils";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={classNames(
          inter.className,
          "bg-blue-50/25 text-blue-900 min-h-screen"
        )}
      >
        <NavBar />
        <div className="mb-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
