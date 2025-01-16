import { josefinSans } from "@/styles/font";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
    title: "Grand Restaurant",
    description: "Grand Restaurant | Serves you the comfort food",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${josefinSans.className} antialiased h-full`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
