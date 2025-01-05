import {
    Josefin_Sans,
    Nothing_You_Could_Do,
    Mrs_Saint_Delafield,
} from "next/font/google";

const josefinSans = Josefin_Sans({
    subsets: ["latin"],
});

const nothingYouCouldDo = Nothing_You_Could_Do({
    weight: "400",
    subsets: ["latin"],
});

const mrsSaintDelafield = Mrs_Saint_Delafield({
    weight: "400",
    subsets: ["latin"],
});

export { josefinSans, nothingYouCouldDo, mrsSaintDelafield };
