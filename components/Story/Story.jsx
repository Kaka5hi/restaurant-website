import { nothingYouCouldDo } from "@/styles/font";
import * as motion from "motion/react-client";

const Story = () => {
    return (
        <div className="max-w-4xl container mx-auto my-20 p-5">
            <div className="space-y-10">
                <div className="flex flex-col items-center justify-center gap-1">
                    <span
                        className={`${nothingYouCouldDo.className} capitalize text-4xl text-orange-300`}
                    >
                        discover
                    </span>
                    <span className="uppercase text-6xl font-bold">
                        our story
                    </span>
                </div>

                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ amount: 0.4, once: true }}
                >
                    <article>
                        <p className="text-2xl">
                            “Cooking is like fashion. Always, I like to try to
                            change. If I'm traveling in a different country - to
                            Australia, the Bahamas, Budapest, Moscow - and I see
                            a new ingredient, I like to try it in a new dish”
                        </p>
                    </article>
                </motion.section>

                <section>
                    <article className="space-y-10 text-xl">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ amount: 0.4, once: true }}
                        >
                            Exercitation photo booth stumptown tote bag Banksy,
                            elit small batch freegan sed. Craft beer elit seitan
                            exercitation, photo booth et 8-bit kale chips
                            proident chillwave deep v laborum. Aliquip veniam
                            delectus, Marfa eiusmod Pinterest in do umami
                            readymade swag. Selfies iPhone Kickstarter, drinking
                            vinegar jean vinegar stumptown yr pop-up artisan
                            sunt. Craft beer elit seitan exercitation, photo
                            booth
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ amount: 0.4, once: true }}
                        >
                            Meh synth Schlitz, tempor duis single-origin coffee
                            ea next level ethnic fingerstache fanny pack
                            nostrud. Photo booth anim 8-bit hella, PBR 3 wolf
                            moon beard Helvetica. Salvia esse nihil, flexitarian
                            Truffaut synth art party deep v chillwave. Seitan
                            High Life reprehenderit consectetur cupidatat kogi.
                            Et leggings fanny pack, elit bespoke vinyl art party
                            Pitchfork selfies master cleanse
                        </motion.p>
                    </article>
                </section>
            </div>
        </div>
    );
};

export default Story;
