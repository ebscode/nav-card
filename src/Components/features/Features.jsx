import { AiFillCheckCircle } from "react-icons/ai";


const Features = ({fea}) => {
    return (
        <div className="flex items-center gap-1 mt-2">
            <AiFillCheckCircle></AiFillCheckCircle>
            <p>{fea}</p>
        </div>
    );
};

export default Features;