import "./globals.css";
import { Inter, Lexend, STIX_Two_Text } from "next/font/google";
import { siteMd } from "@/lib/data/metadatas";
import Navbar from "@/components/layouts/navbar/navbar";
import Footer from "@/components/layouts/footer/footer";
import Providers from "@/components/providers/providers";
import { cn } from "@/lib/utils";

const lexend = Lexend({ subsets: ["latin"], variable: '--lexend' });
const stix = STIX_Two_Text({ subsets: ['latin'], variable: '--stix' })

export const metadata = siteMd;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(lexend.className, lexend.variable, stix.variable)}>
        <Providers>
          <div className="w-full min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-1">
              {children}
            </div>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
