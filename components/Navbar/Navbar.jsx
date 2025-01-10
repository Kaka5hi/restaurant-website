import Link from "next/link";
import * as motion from "motion/react-client";

const Navbar = () => {
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
            <nav className=" bg-white backdrop-filter backdrop-blur-lg bg-opacity-5 px-10 py-3 max-w-7xl mx-auto flex items-center justify-between capitalize text-lg rounded-xl">
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
        </motion.div>
    );
};

export default Navbar;
