import Image from "next/image";
import heroImg from "@/public/hero.png";
import { nothingYouCouldDo } from "@/styles/font";
import * as motion from "motion/react-client";

const HeroSection = () => {
    return (
        <main className="flex items-center justify-between max-w-4xl mx-auto my-5 p-5">
            <motion.div
                className="h-[550px] w-[550px] rounded-full overflow-hidden"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                }}
                viewport={{ once: true }}
            >
                <Image
                    src={heroImg}
                    alt="Hero Image"
                    className="h-full w-full object-cover"
                    placeholder="blur"
                    quality={80}
                    height={550}
                    width={550}
                />
            </motion.div>
            <motion.div
                className="text-center space-y-5"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                }}
                viewport={{ once: true }}
            >
                <h1
                    className={`${nothingYouCouldDo.className} text-4xl text-orange-300 capitalize`}
                >
                    welcome to
                </h1>
                <p className="flex flex-col items-center uppercase ">
                    <span className="text-7xl font-bold">grand</span>
                    <span className="text-4xl leading-3">restaurant</span>
                </p>
            </motion.div>
        </main>
    );
};

export default HeroSection;
