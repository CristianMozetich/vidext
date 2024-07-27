import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "../app/_trpc/Provider";
import AsideBar from "../components/asideBar/AsideBar";
import { AuthProvider } from "./AuthProvider";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Editor",
  description: "Design By Cristian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Provider>
            <AsideBar />
            {children}
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
