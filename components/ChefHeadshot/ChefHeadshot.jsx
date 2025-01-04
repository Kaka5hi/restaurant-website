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

const ChefHeadshot = () => {
    return (
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            {chefData.map((chef, index) => {
                return (
                    <div
                        className="h-[500] overflow-hidden cursor-pointer"
                        key={index}
                    >
                        <motion.div
                            className="w-[400] h-[500] object-cover grayscale rounded-xl overflow-hidden"
                            whileHover={{
                                height: 450,
                                transition: { duration: 0.2 },
                            }}
                        >
                            <Image
                                src={chef.photo}
                                width={400}
                                height={500}
                                alt={chef.name}
                                className="h-full w-full object-cover overflow-hidden"
                                placeholder="blur"
                            />
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
};

export default ChefHeadshot;
