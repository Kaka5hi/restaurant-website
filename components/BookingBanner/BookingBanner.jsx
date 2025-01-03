import bookingBannerImage from "@/public/booking.jpg";
import Image from "next/image";

const BookingBanner = () => {
    return (
        <div className="w-full h-96 relative ">
            <Image
                src={bookingBannerImage}
                alt="Hero Image"
                className="h-full w-full object-cover"
                placeholder="blur"
                quality={100}
                height="100%"
                width="100%"
            />
            <div className="absolute top-0 left-0 bg-blend-overlay w-full h-full bg-scroll flex items-center justify-center">
                <div className="max-w-3xl mx-auto text-center text-3xl">
                    <h3 className="font-bold ">Make an online reservation</h3>
                    <p>or call us at +123123123</p>
                </div>
            </div>
        </div>
    );
};

export default BookingBanner;
