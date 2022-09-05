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
            <Card>
                <h4>Frontend</h4>
                React
                Next.js

            </Card>
            <Card>
                <h4>Backend</h4>
                Node.js
                Express
                MySQL
                MongoDB

            </Card>
            <Card>
                <h4>CI/CD</h4>
                Jest
                Jenkins
                Github Actions 

                <h4>Databases</h4>

                <h4>Design</h4>

            </Card>
        </CardContainer>
    </>
  )
}

export default About