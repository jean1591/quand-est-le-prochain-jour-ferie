import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Footer } from "./component/footer";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { NavBar } from "./component/navBar";
import { classNames } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

const metaDescription = "Trouvez la liste des prochains jours fériés Français";

export const metadata: Metadata = {
  title: {
    template: "Quand est le prochain jour férié ?",
    default: "Quand est le prochain jour férié ?",
  },
  description: metaDescription,
  metadataBase: new URL(
    "https://quand-est-le-prochain-jour-ferie.jeanrobertou.com/"
  ),
  openGraph: {
    title: "Quand est le prochain jour férié ?",
    description: metaDescription,
    url: "https://quand-est-le-prochain-jour-ferie.jeanrobertou.com/",
    siteName: "Quand est le prochain jour férié ?",
    images: [
      {
        url: "/hero-profile.jpeg",
        width: 500,
        height: 500,
      },
    ],
    type: "website",
  },
};

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
        <div className="mb-16">
          {children}
          <Analytics />
        </div>
        <Footer />
      </body>
    </html>
  );
}
