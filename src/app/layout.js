"use client"

import { Kanit } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import InstallBootstrap from "./components/InstallBootstrap.js";

const kanit = Kanit({ subsets: ["thai", 'latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={kanit.className}>
        <InstallBootstrap />
        {children}
      </body>
    </html>
  );
};