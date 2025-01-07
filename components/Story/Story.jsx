import Ambience from "@/public/ambience.jpg";
import ChefPortrait from "@/public/chef_portrait.jpg";
import Philosophy from "@/public/philosophy.jpg";
import SingleStory from "../SingleStory/SingleStory";

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

const Story = () => {
    return (
        <section className="max-w-7xl mx-auto my-20 space-y-20 flex flex-col items-center">
            {storyData.map((item, index) => {
                return <SingleStory index={index} item={item} key={index} />;
            })}
        </section>
    );
};

export default Story;
