import Main from './Main'

interface Props {
    children?: React.ReactNode
}

const Card = ({ children }: Props): JSX.Element => {
  return (
        <div className={style.card}>
            { children }
        </div>
  )
}

export default Card

const style = {
    card: "w-[99%] sm:w-[49%] md:w-[32%] p-4 mb-4 sm:rounded-lg text-theme bg-theme"
}