interface Props {
    styleProp?: string;
    maxCols?: 1 | 2 | 3;
    children?: React.ReactNode;
}

const Card = ({ styleProp, maxCols, children }: Props): JSX.Element => {
    styleProp = !styleProp ? "" : styleProp;
    maxCols = !maxCols ? 3 : maxCols;
    return (
        <div
            className={`card ${styles.card} ${
                styles[("maxCols" + maxCols) as keyof typeof styles]
            } ${styleProp}`}
        >
            {children}
        </div>
    );
};

export default Card;

const styles = {
    card: "relative py-4 px-8 sm:px-4 mb-4 sm:rounded-lg text-theme font-mono text-md bg-theme shadow-xl",
    maxCols1: "w-[99%] sm:w-[99%]",
    maxCols2: "w-[99%] sm:w-[49%]",
    maxCols3: "w-[99%] sm:w-[49%] md:w-[32%]",
};
