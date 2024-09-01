import { Ubuntu } from "@next/font/google";
import "../styles/globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ubuntu.variable} text-neutral-200`}
    >
      <head />
      <body
        className="flex justify-center items-center h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: 'url("/assets/bg.jpg")' }}
      >
        {children}
      </body>
    </html>
  );
}
