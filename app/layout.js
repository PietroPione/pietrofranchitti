// app/layout.jsx
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu"; // Importa il componente Menu
import Footer from "./components/Footer"; // Importa il componente Footer
import { createClient } from "@/prismicio"; // Importa createClient
import { ThemeProvider } from "./components/ThemeProvider";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pietro Franchitti - FANTASTICI siti web e comunicazione digitale",
  description: "Portoflio di Pietro Franchitti, sviluppatore web e designer",
};

export default async function RootLayout({ children }) {
  const client = createClient();
  const menuResponse = await client.getByType("menu");
  const footerResponse = await client.getByType("impostazioni");

  const menuData = menuResponse?.results[0]?.data?.slices?.find(
    (slice) => slice.slice_type === "link_menu"
  );

  const footerData = footerResponse?.results[0]?.data?.slices?.find(
    (slice) => slice.slice_type === "footer"
  );


  return (
    <html lang="it">
      <body className={`${robotoMono.variable} font-roboto-mono antialiased relative`}>
        <ThemeProvider>

        <Menu menu={menuData} />
        {children}
        <Footer footerData={footerData} />
        </ThemeProvider>
      </body>
    </html>
  );
}