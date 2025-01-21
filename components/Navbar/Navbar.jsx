"use client";

import Link from "next/link";
// motion
import * as motion from "motion/react-client";
// icons
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        setShowSidebar(false);
    }, [pathname]);

    return (
        <motion.div
            className="w-full sticky top-5 z-10"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >
            <nav className=" hidden bg-white backdrop-filter backdrop-blur-lg bg-opacity-5 px-10 py-3 max-w-7xl mx-auto md:flex md:items-center md:justify-between capitalize text-lg rounded-xl">
                <Link
                    href={"/"}
                    className="flex items-center flex-col uppercase"
                >
                    <span className="text-4xl font-bold">grand</span>
                    <span className="leading-[0.5rem]">restaurant</span>
                </Link>
                <div className="flex items-center justify-between gap-10 ">
                    <Link href={"/about"}>about</Link>
                    <Link href={"/menu"}>menu</Link>
                    <Link href={"/reservation"}>reservation</Link>
                </div>
            </nav>

            {showSidebar ? (
                <MdOutlineClose
                    className="absolute right-5 top-0 bg-white text-black size-14 p-3 rounded-full cursor-pointer md:hidden"
                    onClick={() => setShowSidebar((prev) => !prev)}
                />
            ) : (
                <HiMenuAlt3
                    className="absolute right-5 top-0 bg-white text-black size-14 p-3 rounded-full cursor-pointer md:hidden"
                    onClick={() => setShowSidebar((prev) => !prev)}
                />
            )}
            <AnimatePresence>
                {showSidebar && (
                    <motion.div
                        className=" absolute p-5 left-0 -top-5 bg-white backdrop-filter backdrop-blur-xl bg-opacity-5 h-screen w-auto md:hidden"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "70%", opacity: 1 }}
                        exit={{ width: 0, opacity: 0, display: "none" }}
                    >
                        <motion.div
                            className=" h-full flex flex-col  gap-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <Link
                                href={"/"}
                                className="flex items-center flex-col uppercase"
                            >
                                <span className="text-4xl font-bold">
                                    grand
                                </span>
                                <span className="leading-[0.5rem]">
                                    restaurant
                                </span>
                            </Link>
                            <div className="flex flex-col items-start text-3xl uppercase ">
                                <Link
                                    className="border-b border-slate-400 p-3 w-full"
                                    href={"/about"}
                                >
                                    about
                                </Link>
                                <Link
                                    className="border-b border-slate-400 p-3 w-full"
                                    href={"/menu"}
                                >
                                    menu
                                </Link>
                                <Link
                                    className="border-b border-slate-400 p-3 w-full"
                                    href={"/reservation"}
                                >
                                    reservation
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Navbar;
