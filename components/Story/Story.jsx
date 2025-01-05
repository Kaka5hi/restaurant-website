import Ambience from "@/public/ambience.jpg";
import ChefPortrait from "@/public/chef_portrait.jpg";
import Philosophy from "@/public/philosophy.jpg";
import Image from "next/image";
import { nothingYouCouldDo } from "@/styles/font";
import * as motion from "motion/react-client";
import Signature from "./Signature";

const storyData = [
    {
        heading: "philosophy",
        subhead: "chef",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi exercitation, photo booth.",
        photo: Philosophy,
        sign: "",
    },
    {
        heading: "restaurant",
        subhead: "check out",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.",
        photo: Ambience,
        sign: "",
    },
    {
        heading: "chef",
        subhead: "meet our",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi exercitation, photo booth.",
        photo: ChefPortrait,
        sign: "john phillipo",
    },
];

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

const Story = () => {
    return (
        <section className="max-w-7xl mx-auto my-20 space-y-20 flex flex-col items-center">
            {storyData.map((item, index) => {
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
                            viewport={{ amount: 0.5, once: true }}
                        >
                            <Image
                                src={item.photo}
                                placeholder="blur"
                                width={400}
                                height={550}
                                alt={item.photo}
                                className="w-full h-full object-cover"
                            />
                        </motion.article>
                        <motion.article
                            className="text-center space-y-2"
                            variants={fadeInRightVar}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ amount: 0.5, once: true }}
                        >
                            <span
                                className={`${nothingYouCouldDo.className} text-orange-300 text-4xl capitalize`}
                            >
                                {item.subhead}
                            </span>
                            <h2 className="uppercase text-6xl font-bold">
                                {item.heading}
                            </h2>
                            <p className="text-lg max-w-lg ">{item.desc}</p>
                            {item?.sign && <Signature name={item?.sign} />}
                        </motion.article>
                    </div>
                );
            })}
        </section>
    );
};

export default Story;
