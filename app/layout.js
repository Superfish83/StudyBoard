import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notosans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "StudyBoard",
  description: "StudyBoard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notosans.className} antialiased`}>{children}</body>
    </html>
  );
}
