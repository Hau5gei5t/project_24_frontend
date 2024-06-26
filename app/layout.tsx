import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "survey-core/defaultV2.css";
import Header from "@/widgets/header";
import { SurveysStoreProvider } from "@/FSDApp/providers/surveys-store-provider";
import { UserStoreProvider } from "@/FSDApp/providers/user-store-provider";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <UserStoreProvider>
      <SurveysStoreProvider>
        <html lang="en">
          <body className={inter.className + " bg-base-300 min-h-dvh"}>
            <div className="container m-auto pt-8">
              <Header />
            </div>
            {children}
          </body>
        </html>
      </SurveysStoreProvider>
    </UserStoreProvider>
  );
}
