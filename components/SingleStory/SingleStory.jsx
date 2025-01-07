import * as motion from "motion/react-client";
import { nothingYouCouldDo } from "@/styles/font";
import Image from "next/image";
import Signature from "@/components/Story/Signature";

const fadeInLeftVar = {
    initial: {
        opacity: 0,
        x: -200,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
};
const fadeInRightVar = {
    initial: {
        opacity: 0,
        x: 200,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: "easeInOut",
            delay: 0.5,
        },
    },
};

const SingleStory = ({ item, index }) => {
    return (
        <div
            key={index}
            className={`max-w-5xl flex ${
                index % 2 !== 0 && "flex-row-reverse"
            } items-center justify-center gap-10`}
        >
            <motion.article
                className="w-[400] h-[550] object-cover overflow-hidden rounded-lg"
                variants={fadeInLeftVar}
                initial="initial"
                whileInView="animate"
                viewport={{ amount: 0.3, once: true }}
            >
                <Image
                    src={item?.photo}
                    placeholder="blur"
                    width={400}
                    height={550}
                    alt={item?.photo}
                    className="w-full h-full object-cover"
                />
            </motion.article>
            <motion.article
                className="text-center space-y-2"
                variants={fadeInRightVar}
                initial="initial"
                whileInView="animate"
                viewport={{ amount: 0.3, once: true }}
            >
                <span
                    className={`${nothingYouCouldDo.className} text-orange-300 text-4xl capitalize`}
                >
                    {item?.subhead}
                </span>
                <h2 className="uppercase text-6xl font-bold">
                    {item?.heading}
                </h2>
                <p className="text-lg max-w-lg ">{item?.desc}</p>
                {item?.sign && <Signature name={item?.sign} />}
            </motion.article>
        </div>
    );
};

export default SingleStory;
