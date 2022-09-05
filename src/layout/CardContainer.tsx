
interface Props {
    children?: React.ReactNode 
}

const Card = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.cardContainer} >
        { children }
    </div>
  )
}

export default Card

const styles = {
    cardContainer: "flex flex-wrap justify-between min-w-[300px] max-w-[900px] w-full sm:w-11/12 md:w-4/5"
}