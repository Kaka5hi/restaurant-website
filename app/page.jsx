import BookingBanner from "@/components/BookingBanner/BookingBanner";
import ChefHeadshot from "@/components/ChefHeadshot/ChefHeadshot";
import HeroSection from "@/components/HeroSection/HeroSection";
import Intro from "@/components/Intro/Intro";
import Story from "@/components/Story/Story";

export default function Home() {
    return (
        <>
            <HeroSection />
            <Intro />
            <ChefHeadshot />
            <BookingBanner />
            <Story />
        </>
    );
}
