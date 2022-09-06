
interface Props {
    items: string[],
}

const CardBody = ({ items }: Props) => {
  return (
    <>
        { items.map(item => (
            <p key={ item }>{ item }</p>
        ) )}
    </>
  )
}

export default CardBody