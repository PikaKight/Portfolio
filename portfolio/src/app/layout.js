import { Abel } from 'next/font/google'
import "./globals.css";

const abel = Abel({ 
    subsets: ['latin'],
    weight: '400'
  })

export const metadata = {
  title: "Marcus Tuen Muk | Software Engineering Student",
  description: "Marcus Tuen Muk's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${abel.variable}`}>
        {children}
      </body>
    </html>
  );
}
