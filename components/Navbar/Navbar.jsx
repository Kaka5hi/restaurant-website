import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-full sticky top-5">
            <nav className=" bg-white backdrop-filter backdrop-blur-lg bg-opacity-5 px-10 py-3 max-w-7xl mx-auto flex items-center justify-between capitalize text-lg rounded-xl">
                <Link
                    href={"/"}
                    className="flex items-center flex-col uppercase font-bold"
                >
                    <span className="text-4xl  font-bold">grand</span>
                    <span className="leading-3">restaurant</span>
                </Link>
                <div className="flex items-center justify-between gap-10 ">
                    <Link href={"/about"}>about</Link>
                    <Link href={"/menu"}>menu</Link>
                    <Link href={"/venue"}>event</Link>
                </div>
                <Link href={"/reservation"}>reservation</Link>
            </nav>
        </div>
    );
};

export default Navbar;
