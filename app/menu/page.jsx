// components
import Banner from "@/components/Banner/Banner";
import Menu from "@/components/Menu/Menu";

// image
import menuBanner from "@/public/menu.jpg";
import menuOne from "@/public/hero.png";
import BookingBanner from "@/components/BookingBanner/BookingBanner";

// dummy menu data
const menuData = [
    {
        title: "signature dishes",
        img: menuOne,
        dishes: [
            {
                dishTitle: "Salted Fried Chicken",
                price: 20.0,
                ingridents: ["chicken", "olive oil", "salt"],
            },
            {
                dishTitle: "Crab With Curry Sources",
                price: 24.5,
                ingridents: ["Crab", "potato", "rice"],
            },
            {
                dishTitle: "Imported Salmon Steak",
                price: 18.0,
                ingridents: ["salmon", "veggies", "oil"],
            },
            {
                dishTitle: "Baked potato pizza",
                price: 12.0,
                ingridents: ["potato", "bread", "cheese"],
            },
        ],
    },
    {
        title: "starters",
        img: menuOne,
        dishes: [
            {
                dishTitle: "Fried Potatoes With Garlic",
                price: 12.0,
                ingridents: ["potao", "olive oil", "garlic"],
            },
            {
                dishTitle: "Tuna Roast Source",
                price: 24.5,
                ingridents: ["tuna", "potato", "rice"],
            },
            {
                dishTitle: "Roast Pork (4 Sticks)",
                price: 15.5,
                ingridents: ["pork", "veggies", "soyu"],
            },
            {
                dishTitle: "Salted Fried Chicken",
                price: 20.0,
                ingridents: ["chicken", "olive oil", "salt"],
            },
        ],
    },
];

const Page = () => {
    return (
        <div className="space-y-20 pb-10 mb-10 ">
            <Banner img={menuBanner} title="our menu" subtitle="check out" />
            <div className="max-w-7xl mx-auto">
                <section className="space-y-20 text-center text-white">
                    <blockquote className="text-2xl  max-w-4xl mx-auto font-semibold">
                        “You can put the greatest seafood restaurant next to an
                        average steak house in an urban area, and that steak
                        house will do more business than the seafood place. If
                        you go to the water, you can put an average seafood
                        place next to the greatest steak house, and people are
                        going to eat seafood.”
                    </blockquote>
                    <div className="flex flex-col items-center gap-1 text-xl">
                        <p className="text-2xl font-bold">Opening Hours</p>
                        <span className="text-orange-300">
                            Mon - Fri 11:30am - 8pm
                        </span>
                        <span className="text-orange-300">
                            Sat - Sun 11:30am - 10pm
                        </span>
                    </div>

                    <article className="space-y-10">
                        {menuData.map((item, index) => {
                            return (
                                <Menu key={index} item={item} index={index} />
                            );
                        })}
                    </article>
                </section>
            </div>
            <BookingBanner />
        </div>
    );
};

export default Page;
