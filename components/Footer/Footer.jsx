import Link from "next/link";
import { FaFacebook, FaTripadvisor } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="max-w-7xl mx-auto p-5 space-y-20">
            <div className="flex items-center justify-between gap-y-10 gap-x-5 capitalize flex-wrap">
                <div>
                    <Link
                        href={"/"}
                        className="flex items-center flex-col uppercase "
                    >
                        <span className="text-4xl font-bold">grand</span>
                        <span className="leading-[0.5rem]">restaurant</span>
                    </Link>
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold">Location</span>
                    <span className="text-orange-300">
                        732/21 second street, machester king street,
                    </span>
                    <span className="text-orange-300">
                        kingston united kingdom
                    </span>
                </div>

                <div className="flex flex-col">
                    <span className="text-2xl font-bold">opening hours</span>
                    <span className="text-orange-300">
                        mon - fri 11:30am - 8pm
                    </span>
                    <span className="text-orange-300">
                        sat - sun 11:30am - 10pm
                    </span>
                </div>
            </div>
            <div className="space-y-5">
                <ul className="flex items-center justify-center gap-5 text-2xl">
                    <li>
                        <FaFacebook />
                    </li>
                    <li>
                        <FaInstagram />
                    </li>
                    <li>
                        <FaXTwitter />
                    </li>
                    <li>
                        <FaTripadvisor />
                    </li>
                </ul>
                <span className="block text-center">
                    &copy; Copyright Grand Restaurant Theme Demo - Theme by
                    ThemeGoods
                </span>
            </div>
        </footer>
    );
};

export default Footer;
