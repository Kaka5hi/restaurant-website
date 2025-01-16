import * as motion from "motion/react-client";
import { nothingYouCouldDo } from "@/styles/font";
import Image from "next/image";
import Signature from "@/components/Story/Signature";

const fadeIn = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
};

const SingleStory = ({ item, index }) => {
    return (
        <motion.div
            key={index}
            className={`max-w-5xl flex items-center justify-center gap-10 flex-col-reverse md:flex-row ${
                index % 2 !== 0 && "md:flex-row-reverse"
            }`}
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.4, once: true }}
        >
            <article className=" w-[350px] h-[450px] lg:[400px] lg:[550px] object-cover overflow-hidden rounded-lg">
                <Image
                    src={item?.photo}
                    placeholder="blur"
                    width="100%"
                    height="auto"
                    alt={item?.photo}
                    className="w-full h-full object-cover"
                />
            </article>
            <motion.article className="text-center space-y-2">
                <span
                    className={`${nothingYouCouldDo.className} text-orange-300 text-4xl capitalize`}
                >
                    {item?.subhead}
                </span>
                <h2 className="uppercase text-4xl md:text-5xl lg:text-6xl font-bold">
                    {item?.heading}
                </h2>
                <p className="text-lg max-w-lg ">{item?.desc}</p>
                {item?.sign && <Signature name={item?.sign} />}
            </motion.article>
        </motion.div>
    );
};

export default SingleStory;
