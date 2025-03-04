import BookingBanner from "@/components/BookingBanner/BookingBanner";
import * as motion from "motion/react-client";

const Page = () => {
    return (
        <motion.div
            className="max-w-7xl mx-auto mb-20 -mt-20 md:mt-0 space-y-10"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 0.2,
                    duration: 0.5,
                    ease: "linear",
                },
            }}
        >
            <BookingBanner />
            <h1 className="text-center text-4xl uppercase ">Table Booking</h1>
            <div className=" max-w-xl mx-auto p-5 space-y-10">
                <form className="space-y-5">
                    <div className="flex flex-col gap-1">
                        <label
                            className="capitalize text-2xl text-white"
                            htmlFor="name"
                        >
                            name
                        </label>
                        <input
                            className="p-3 rounded-md border-none outline-none text-lg caret-black placeholder:text-gray-500 placeholder:capitalize text-black"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="your name"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label
                            className="capitalize text-2xl text-white"
                            htmlFor="email"
                        >
                            email
                        </label>
                        <input
                            className="p-3 rounded-md border-none outline-none text-lg caret-black placeholder:text-gray-500 placeholder:capitalize text-black"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="your email"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label
                            className="capitalize text-2xl text-white"
                            htmlFor="number"
                        >
                            number
                        </label>
                        <input
                            className="p-3 rounded-md border-none outline-none text-lg caret-black placeholder:text-gray-500 placeholder:capitalize text-black"
                            type="text"
                            name="number"
                            id="number"
                            placeholder="your number"
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="flex flex-col gap-1">
                            <label
                                className="capitalize text-2xl text-white"
                                htmlFor="seats"
                            >
                                seats
                            </label>
                            <input
                                className="p-3 rounded-md border-none outline-none text-lg caret-black placeholder:text-gray-500 placeholder:capitalize text-black"
                                type="number"
                                name="seats"
                                id="seats"
                                placeholder="-"
                                min={1}
                                max={5}
                            />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label
                                className="capitalize text-2xl text-white"
                                htmlFor="date"
                            >
                                date
                            </label>
                            <input
                                className="p-3 rounded-md border-none outline-none text-lg caret-black  placeholder:capitalize text-black"
                                type="date"
                                name="date"
                                id="date"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label
                            className="capitalize text-2xl text-white"
                            htmlFor="note"
                        >
                            special request
                        </label>
                        <textarea
                            className="p-3 rounded-md border-none outline-none text-lg first-letter:capitalize caret-black placeholder:text-gray-500 text-black resize-none"
                            name="note"
                            id="note"
                            cols="50"
                            rows="10"
                            placeholder="Any special mention or request"
                        ></textarea>
                    </div>
                </form>
                <div className="text-center">
                    <button className="border-transparent capitalize px-4 py-2 rounded-[4px] text-3xl font-semibold hover:cursor-pointer hover:underline leading-none">
                        book now
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Page;
