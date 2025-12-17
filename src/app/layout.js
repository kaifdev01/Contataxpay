import Wrapper from "./components/Wrapper";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter", // optional (recommended)
  display: "swap",
});

export const metadata = {
  title: "My App",
  description: "Using Inter font",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter">
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
