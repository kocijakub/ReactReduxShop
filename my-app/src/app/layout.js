import "./globals.css";
import {NavBar} from "@/components/NavBar";
import Provid from "@/redux/Provid";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"h-screen"}>
      <Provid>
      <NavBar/>
      {children}
      </Provid>
      </body>
    </html>
  );
}
