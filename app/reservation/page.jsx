const Page = () => {
    return (
        <div className="max-w-7xl mx-auto my-20 space-y-10">
            <h1 className="text-center text-4xl uppercase ">Table Booking</h1>
            <div className=" max-w-xl mx-auto p-5 space-y-5">
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
                    <button className="border-transparent text-black bg-orange-300 capitalize px-4 py-2 rounded-[4px] text-lg font-bold hover:cursor-pointer">
                        book now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
