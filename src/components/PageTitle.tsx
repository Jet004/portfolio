import Main from '../layout/Main'

interface Props {
    title: String
}

const PageTitle = ({ title }: Props): JSX.Element => {
  return (
    <Main showBackground={false} >
        <h1 className={styles.title}>{ title }</h1>
    </Main>
  )
}

export default PageTitle

const styles = {
    title: "text-theme text-3xl mt-6"
}