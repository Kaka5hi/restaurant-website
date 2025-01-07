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
            <body className={`${josefinSans.className}  antialiased`}>
                <Navbar />
                <div className="min-h-[70vh] mt-10">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
