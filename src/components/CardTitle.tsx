interface Props {
    title: string;
}

const CardTitle = ({ title }: Props) => {
    return <h4 className={styles.title}>{title}</h4>;
};

export default CardTitle;

const styles = {
    title: "font-mono text-lg py-1 mb-4 border-b border-sky-500",
};
