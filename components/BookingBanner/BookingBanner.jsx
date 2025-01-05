import bookingBannerImage from "@/public/booking.jpg";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

const BookingBanner = () => {
    return (
        <div className="w-full h-96 relative flex items-center justify-center my-20">
            <Image
                src={bookingBannerImage}
                alt="Hero Image"
                className="w-full h-full object-cover blur-[2px]"
                placeholder="blur"
                quality={100}
                height="100%"
                width="100%"
            />
            <motion.div
                className="absolute top-0 left-0 bg-blend-overlay  w-full h-full flex items-center justify-center"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                    },
                }}
                viewport={{ amount: 0.7, once: true }}
            >
                <div className="max-w-3xl mx-auto text-center text-2xl  space-y-5 ">
                    <Link
                        href={"/reservation"}
                        className="font-semibold shadow-[1px_4px_33px_0px_rgba(255,_255,_255,_0.05)] py-4 px-8 border-2 rounded-md"
                    >
                        {" "}
                        Make online reservation
                    </Link>

                    <p className="">or call us at +123123123</p>
                </div>
            </motion.div>
        </div>
    );
};

export default BookingBanner;
