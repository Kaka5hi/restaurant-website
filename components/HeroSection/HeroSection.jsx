import Image from "next/image";
import heroImg from "@/public/hero.png";
import { nothingYouCouldDo } from "@/styles/font";

const HeroSection = () => {
    return (
        <main className="flex items-center justify-between max-w-4xl mx-auto my-5 p-5">
            <div className="h-[550px] w-[550px] rounded-full overflow-hidden">
                <Image
                    src={heroImg}
                    alt="Hero Image"
                    className="h-full w-full object-cover"
                    placeholder="blur"
                    quality={80}
                    height={550}
                    width={550}
                />
            </div>
            <div className="text-center space-y-5">
                <h1
                    className={`${nothingYouCouldDo.className} text-4xl text-orange-300 capitalize`}
                >
                    welcome to
                </h1>
                <p className="flex flex-col items-center uppercase ">
                    <span className="text-7xl font-bold">grand</span>
                    <span className="text-4xl leading-3">restaurant</span>
                </p>
            </div>
        </main>
    );
};

export default HeroSection;
