import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "02.218 AI IAT",
  description: "Introduction to Psychology Research Project",
  icons: {
    icon: "/image/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col items-center justify-center`}>
        <div className="max-w-5xl">
          {children}
        </div>
      </body>
    </html>
  );
}
