import projects from "../data/projects";

// Import Components
import Card from "../components/Card";
import CardBody from "../components/CardBody";
import CardContainer from "../layout/CardContainer";
import CardTitle from "../components/CardTitle";
import PageTitle from "../components/PageTitle";
import Main from "../layout/Main";

// Import Icons
import { TbExternalLink } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const Projects = (): JSX.Element => {
    return (
        <>
            <PageTitle title="Projects" />
            <Main styleProp={styles.main}>
                <h1 className="bg-sky-600/40 p-2 mb-4 rounded-lg">
                    This page is under development. Content will be added as it
                    is completed
                </h1>
            </Main>
            <CardContainer styleProp={styles.cardCont}>
                {projects &&
                    projects.map((project, i) => (
                        <Card key={i} maxCols={2} styleProp={styles.card}>
                            <CardTitle title={project.title} />
                            <CardBody styleProp={styles.cardBody}>
                                <img
                                    src={project.imgUrl}
                                    alt={project.imgAlt}
                                    className={styles.cardImg}
                                />
                                <div className={styles.summary}>
                                    {project.summary}
                                </div>
                                <div className={styles.siteLinks}>
                                    <div className={styles.linkCont}>
                                        <TbExternalLink
                                            size={styles.linkIcon}
                                        />
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            className={styles.link}
                                        >
                                            Visit
                                        </a>
                                    </div>
                                    <div className={styles.linkCont}>
                                        <FaGithub size={styles.linkIcon} />
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            className={styles.link}
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
            </CardContainer>
        </>
    );
};

export default Projects;

const styles = {
    main: "flex-col p-8",
    cardCont: "mt-8",
    card: "flex flex-col",
    cardBody: "flex flex-col grow text-sm",
    cardImg: "w-4/5 self-center border border-slate-500 mt-2 mb-6",
    summary: "grow",
    siteLinks: "flex justify-self-end justify-between my-4 pt-1",
    linkCont: "flex items-center cursor-pointer  text-theme-sky w-auto",
    linkIcon: "1.3em",
    link: "ml-1 pt-[0.1em]",
};
