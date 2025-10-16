import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

// Core
import StyledComponentsRegistry from "@/lib/registry";

// Contexts
import { GameContextProvider } from "@/contexts/GameContext";
import { ModalProvider } from "@/contexts/ModalContext";
import { RouletteProvider } from "@/contexts/RouletteContext";

// Modals
import { UserPlayed } from "@/components/Theme/Modals/UserPlayed";
import { SpinsShop } from "@/components/Theme/Modals/SpinsShop";

export const metadata: Metadata = {
  title: "Halloween - VeraBet",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased ${montserrat.variable}`}>
        <StyledComponentsRegistry>
          <GameContextProvider>
            <ModalProvider>
              <RouletteProvider>
                {children}
                {/* <UserPlayed /> */}
                <SpinsShop />
              </RouletteProvider>
            </ModalProvider>
          </GameContextProvider>
        </StyledComponentsRegistry>
      </body>

      {/* <Script
        src="https://cdn.jsdelivr.net/npm/disable-devtool"
        strategy="afterInteractive"
        disable-devtool-auto
      /> */}
    </html>
  );
}
