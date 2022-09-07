import Main from "../layout/Main";

interface Props {
    children?: React.ReactNode;
}

const Card = ({ children }: Props): JSX.Element => {
    return <div className={`card ${style.card}`}>{children}</div>;
};

export default Card;

const style = {
    card: "relative w-[99%] sm:w-[49%] md:w-[32%] py-4 px-8 sm:px-4 mb-4 sm:rounded-lg text-theme font-mono text-md bg-theme shadow-xl",
};
