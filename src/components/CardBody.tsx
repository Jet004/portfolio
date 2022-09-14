interface Props {
    styleProp?: string;
    items?: string[];
    children?: React.ReactNode;
}

const CardBody = ({ styleProp, items, children }: Props) => {
    styleProp = !styleProp ? "" : styleProp;
    return (
        <div className={` ${styleProp}`}>
            {items && items.map((item) => <p key={item}>{item}</p>)}
            {children}
        </div>
    );
};

export default CardBody;
