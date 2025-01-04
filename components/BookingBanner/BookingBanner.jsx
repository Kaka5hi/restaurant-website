import bookingBannerImage from "@/public/booking.jpg";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

const BookingBanner = () => {
    return (
        <motion.div
            className="w-full h-96 relative flex items-center justify-center "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.4, once: true }}
        >
            <Image
                src={bookingBannerImage}
                alt="Hero Image"
                className="w-full h-full object-cover"
                placeholder="blur"
                quality={100}
                height="100%"
                width="100%"
            />
            <div className="absolute top-0 left-0 bg-blend-overlay bg-gradient-to-b from-black from-2% via-transparent via-50% to-black  w-full h-full flex items-center justify-center">
                <div className="max-w-3xl mx-auto text-center text-3xl">
                    <h3 className="font-bold ">
                        Make an online{" "}
                        <Link href={"/reservation"}>reservation</Link>
                    </h3>
                    <p>or call us at +123123123</p>
                </div>
            </div>
        </motion.div>
    );
};

export default BookingBanner;
