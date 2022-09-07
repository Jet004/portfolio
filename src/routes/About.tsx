import Card from "../components/Card";
import CardBody from "../components/CardBody";
import CardContainer from "../layout/CardContainer";
import CardTitle from "../components/CardTitle";
import Main from "../layout/Main";
import { NavLink } from "react-router-dom";
import PageTitle from "../components/PageTitle";

import dp from "../public/images/dp.jpg";

const techStackData = [
    {
        title: "Frontend",
        items: ["React", "Next.js", "MUI", "TailwindCSS", "Parcel", "Babel"],
    },
    {
        title: "Backend",
        items: [
            "Node.js",
            "Express",
            "MySQL",
            "MongoDB",
            "PostgreSQL",
            "Mongoose ODM",
            "Prisma ORM",
        ],
    },
    {
        title: "DevOps",
        items: [
            "Git",
            "Github Actions",
            "Jenkins",
            "Jest",
            "Heroku",
            "EsLint",
            "Prettier",
        ],
    },
    {
        title: "Design",
        items: ["Figma", "Draw.io", "Gimp"],
    },
];

const About = (): JSX.Element => {
    const pingStack = () => {
        const ping = document.getElementsByClassName("card") as HTMLCollection;
        for (let element of ping) {
            element.classList.add("animate-pulse");
            setTimeout(() => {
                element.classList.remove("animate-pulse");
            }, 6000);
        }
    };

    return (
        <>
            <PageTitle title="About" />
            <Main styleProp={styles.main}>
                <div className={styles.profile}>
                    <img src={dp} alt="Display picture" className={styles.dp} />
                    <p className={styles.profileText}>
                        I'm Jacob and I love code.
                    </p>
                </div>
                <p className={styles.about}>
                    I'm a full stack web developer with a passion for building
                    Progressive Web Applications which are responsive,
                    performant, and accessible. Continuous Delivery is my coding
                    mantra and TDD the means to programatic enlightenment.
                </p>
                <p className={styles.about}>
                    I'm currently looking for opportunities to join an awesome
                    team that can help me grow as a developer.
                </p>
                <p className={styles.about}>Learn more about what I do:</p>
                <div className={styles.links}>
                    <a
                        href="#tech-stack"
                        className={styles.link}
                        onClick={pingStack}
                    >
                        Tech Stack
                    </a>
                    <NavLink to="/projects" className={styles.link}>
                        Projects
                    </NavLink>
                    <NavLink to="/contact" className={styles.link}>
                        Contact
                    </NavLink>
                </div>
            </Main>
            <PageTitle title="Tech Stack" id="tech-stack" noGutter />
            <CardContainer>
                {techStackData?.map((data) => {
                    return (
                        <Card key={data.title}>
                            <CardTitle title={data.title} />
                            <CardBody items={data.items} />
                        </Card>
                    );
                })}
            </CardContainer>
        </>
    );
};

export default About;

const styles = {
    main: "flex-col",
    links: "flex justify-around mb-6",
    link: "text-theme-sky font-medium dark:font-normal border border-theme-sky shadow-md button-themed rounded-lg px-3 py-1 mt-4",
    profile:
        "flex flex-col justify-center items-center sm:flex-row sm:justify-start mx-4 my-6",
    dp: "rounded-full w-44 h-44 mb-4 sm:mb-0",
    profileText: "flex self-center text-xl pl-0 sm:pl-10",
    about: "text-justify text-md px-4 py-3",
};
