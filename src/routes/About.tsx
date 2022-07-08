import Card from '../layout/Card'
import CardContainer from '../layout/CardContainer'
import PageTitle from '../components/PageTitle'
import Main from '../layout/Main'

const About = (): JSX.Element => {
  return (
    <>
        <PageTitle title="About" />
        <Main>
            <h1>About - Intro - tech - what I do - links: projects, tech stack, contact</h1>
        </Main>
        <PageTitle title="Tech Stack" />
        <CardContainer>
            <Card>Frontend</Card>
            <Card>Backend</Card>
            <Card>CI/CD</Card>
        </CardContainer>
    </>
  )
}

export default About