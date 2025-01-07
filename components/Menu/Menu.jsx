"use client";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

import Image from "next/image";
import SingleMenuItem from "./SingleMenuItem";
import { useState } from "react";

const moveUpVariant = {
    initial: {
        y: -20,
        transition: {
            duration: 2,
        },
    },
    animate: {
        y: 20,
        transition: {
            duration: 2,
        },
    },
};
const moveDownVariant = {
    initial: {
        y: 20,
        transition: {
            duration: 2,
        },
    },
    animate: {
        y: -20,
        transition: {
            duration: 2,
        },
    },
};

const Menu = ({ item, index }) => {
    const { scrollY } = useScroll();

    const [scrollingDown, setScrollingDown] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const prevValue = scrollY.getPrevious();

        // if latest value is greater thn previous value
        // meaning user is scrolling down
        if (latest > prevValue) {
            setScrollingDown(true);
        } else {
            setScrollingDown(false);
        }
    });

    return (
        <div
            className={`flex ${
                index % 2 !== 0 && "flex-row-reverse"
            } items-center justify-between gap-5 max-w-5xl mx-auto min-h-screen`}
        >
            <motion.div
                className=" w-1/2 h-full flex flex-col justify-around capitalize"
                variants={moveUpVariant}
                whileInView={scrollingDown ? "initial" : "animate"}
                viewport={{ amount: 0.4 }}
            >
                <h1 className="text-center text-4xl capitalize font-semibold p-5">
                    {item?.title}
                </h1>
                <ul className="">
                    {item?.dishes?.map((i, index) => {
                        return <SingleMenuItem key={index} dish={i} />;
                    })}
                </ul>
            </motion.div>
            <motion.div
                className="w-1/2 h-full object-cover "
                variants={moveDownVariant}
                whileInView={scrollingDown ? "initial" : "animate"}
                viewport={{ amount: 0.4 }}
            >
                <Image
                    src={item?.img}
                    width={"auto"}
                    height={700}
                    placeholder="blur"
                    alt={item?.title}
                    className="w-full h-full object-cover shadow-2xl"
                />
            </motion.div>
        </div>
    );
};

export default Menu;
