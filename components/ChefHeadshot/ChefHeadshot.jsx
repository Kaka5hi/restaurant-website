"use client";

import Image from "next/image";
import chefOne from "@/public/chef_1.jpg";
import chefTwo from "@/public/chef_2.jpg";
import chefThree from "@/public/chef_3.jpg";
import * as motion from "motion/react-client";

const chefData = [
    {
        name: "john benette",
        post: "french chef",
        photo: chefOne,
    },
    {
        name: "benjamin doe",
        post: "italian chef",
        photo: chefTwo,
    },
    {
        name: "frank rose",
        post: "food stylish exper",
        photo: chefThree,
    },
];

const fadeInVar = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.4 * index,
            ease: "linear",
            duration: 0.4,
        },
    }),
};

const ChefHeadshot = () => {
    return (
        <motion.div className="max-w-7xl mx-auto flex items-center flex-col gap-10 md:justify-between md:flex-row">
            {chefData.map((chef, index) => {
                return (
                    <motion.div
                        className="h-[500px] md:h-[600px] overflow-hidden flex flex-col justify-between"
                        key={index}
                        variants={fadeInVar}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ amount: 0.4, once: true }}
                        custom={index}
                    >
                        <motion.div
                            className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] object-cover rounded-lg overflow-hidden"
                            initial={{ filter: "grayscale(1)" }}
                            whileHover={{
                                filter: "grayscale(0)",
                                height: 450,
                                transition: { duration: 0.2 },
                            }}
                        >
                            <Image
                                src={chef.photo}
                                width="100%"
                                height="auto"
                                alt={chef.name}
                                className="h-full w-full object-cover overflow-hidden cursor-pointer"
                                placeholder="blur"
                            />
                        </motion.div>
                        <div className="space-y-2 capitalize">
                            <span className="text-orange-300 text-sm uppercase tracking-widest">
                                {chef.post}
                            </span>
                            <h2 className="text-4xl font-semibold">
                                {chef.name}
                            </h2>
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default ChefHeadshot;
