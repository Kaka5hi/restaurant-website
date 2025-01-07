const SingleMenuItem = ({ dish }) => {
    const { dishTitle, price, ingridents } = dish;
    return (
        <li className="flex flex-col items-start p-5 ">
            <p className="flex items-center justify-between w-full text-2xl font-semibold">
                {dishTitle}
                <span>${price.toFixed(2)}</span>
            </p>
            <span className="text-gray-400 text-lg">
                {ingridents.join(" / ")}
            </span>
        </li>
    );
};

export default SingleMenuItem;
