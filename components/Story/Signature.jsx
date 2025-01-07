import { mrsSaintDelafield } from "@/styles/font";

const Signature = ({ name }) => {
    return (
        <p className={`${mrsSaintDelafield.className} text-5xl capitalize`}>
            {name}
        </p>
    );
};

export default Signature;
