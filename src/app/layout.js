import { Inter } from "next/font/google";
import "./globals.css";
import Wrapper from "./component/wraper";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yourd-amazon",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
    
      <body className={inter.className}><Wrapper> {children} </Wrapper>   </body>
    
    </html>
  );
};

