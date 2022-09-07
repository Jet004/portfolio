import Main from "../layout/Main";

interface Props {
    title: string;
    id?: string;
    noGutter?: boolean;
}

const PageTitle = ({ title, id, noGutter }: Props): JSX.Element => {
    if (id === undefined || id === null) id = "";
    if (noGutter === undefined || noGutter === null) noGutter = false;

    return (
        <Main showBackground={false}>
            <div
                className={`${styles.container} ${
                    noGutter ? styles.spacer : ""
                }`}
            >
                <h1 id={id} className={`${styles.title}`}>
                    {title}
                </h1>
                <div className={styles.decoration}></div>
            </div>
        </Main>
    );
};

export default PageTitle;

const styles = {
    container: "relative",
    title: "relative text-theme text-3xl z-10",
    decoration:
        "absolute w-24 h-24 bg-sky-400 opacity-30 left-[-40] top-[-30] rounded-full z-0",
    spacer: "mt-20",
};
