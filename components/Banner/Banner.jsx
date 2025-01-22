import Image from "next/image";
import { nothingYouCouldDo } from "@/styles/font";
import * as motion from "motion/react-client";

const Banner = ({ img, title, subtitle }) => {
    return (
        <div>
            <motion.div
                className="w-full h-[500px] mx-auto relative"
                initial={{ filter: "blur(20px)", opacity: 0 }}
                animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    transition: {
                        duration: 1,
                        ease: "backOut",
                    },
                }}
            >
                <Image
                    className="w-full h-[500px] object-cover"
                    src={img}
                    width={"auto"}
                    height={"auto"}
                    placeholder="blur"
                    alt="about"
                />
                <div className="absolute left-0 top-0 bg-black w-full h-full opacity-45"></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center capitalize flex-col">
                    <motion.span
                        className={`${nothingYouCouldDo.className} text-4xl font-semibold`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 0.5,
                                ease: "easeOut",
                                duration: 0.5,
                            },
                        }}
                        viewport={{ once: true }}
                    >
                        {subtitle}
                    </motion.span>
                    <motion.h1
                        className="text-7xl uppercase font-bold"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 1,
                                ease: "easeOut",
                                duration: 0.5,
                            },
                        }}
                        viewport={{ once: true }}
                    >
                        {title}
                    </motion.h1>
                </div>
            </motion.div>
        </div>
    );
};

export default Banner;
