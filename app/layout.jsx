import "./globals.css";
import { Archivo_Black, Space_Grotesk, Almendra } from "next/font/google";
import Providers from "../components/Providers";

const archivo = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-body" });
// Hand-cut style face that echoes the real SCLU lettering
const almendra = Almendra({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-logo" });

export const metadata = {
  title: "SCLU — Students' Civil Liberties Union",
  description:
    "Student-led nonprofit in San Diego championing civil liberties and amplifying the concerns of students. S is for Students. C is for Civil. L is for Liberties. U is for Union.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${space.variable} ${almendra.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}