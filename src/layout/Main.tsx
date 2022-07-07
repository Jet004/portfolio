
interface Props {
    children?: React.ReactNode,
    showBackground?: Boolean | null
}

const Main = ({ children, showBackground }: Props): JSX.Element => {

    if(showBackground === undefined || showBackground === null) showBackground = true

  return (
    <div className={`${styles.main} ${ showBackground ? "bg-theme" : "" }`}>
        { children }
    </div>
  )
}

export default Main

const styles = {
    main: "flex min-w-[300px] w-full sm:w-11/12 md:w-4/5 p-4 sm:rounded-lg text-theme"
}