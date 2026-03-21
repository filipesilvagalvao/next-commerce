import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from '@clerk/localizations'

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Criando um ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="pt-br">
        <body>
          <NavBar />
          <main className="main">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
