import { useContext } from "react";
import { ScreenWidthContext } from "../context/context";

// Import icons
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Socials = () => {
    const screenWidth = useContext(ScreenWidthContext);
    return (
        <div
            className={`${screenWidth < 640 ? styles.mobile : styles.desktop} ${
                styles.socials
            }`}
        >
            <a href="https://github.com/Jet004" target="_blank">
                <FaGithub className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com/in/jet004/" target="_blank">
                <FaLinkedin className={styles.icon} />
            </a>
            <a href="mailto:jeturner44@outlook.com">
                <FaEnvelope className={styles.icon} />
            </a>
        </div>
    );
};

export default Socials;

const styles = {
    desktop:
        "fixed right-0 top-16 w-52 text-3xl sm:mr-4 xl:mr-[calc(calc(100%-1280px)*.6)]",
    mobile: "fixed top-0 left-[112px] mob:left-1/2 mob:-translate-x-1/2 w-32 text-2xl",
    socials: "flex z-50 justify-around pt-5 h-16",
    icon: "cursor-pointer text-sky-600 dark:text-sky-500 hover:text-sky-800 hover:dark:text-sky-300",
};
