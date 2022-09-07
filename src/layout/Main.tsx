interface Props {
    children?: React.ReactNode;
    showBackground?: Boolean | null;
    styleProp?: string;
}

const Main = ({ children, showBackground, styleProp }: Props): JSX.Element => {
    if (showBackground === undefined || showBackground === null)
        showBackground = true;
    if (styleProp === undefined || styleProp === null) styleProp = "";

    return (
        <div
            className={`${styles.main} ${
                showBackground ? "bg-theme shadow-xl" : ""
            } ${styleProp}`}
        >
            {children}
        </div>
    );
};

export default Main;

const styles = {
    main: "relative flex min-w-[300px] max-w-[900px] w-full sm:w-11/12 md:w-4/5 p-4 sm:rounded-lg text-theme",
};
