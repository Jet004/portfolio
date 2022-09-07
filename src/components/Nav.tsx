import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import * as H from "history";

const Nav = ({ mode, themeSwitch }: ThemeToggleProps): JSX.Element => {
    interface NavLinks {
        page: String;
        path: H.To;
    }

    const navLinks: NavLinks[] = [
        {
            page: "About",
            path: "/about",
        },
        {
            page: "Projects",
            path: "/projects",
        },
        {
            page: "Contact",
            path: "/contact",
        },
    ];

    return (
        <div className={styles.navContainer}>
            <div className={styles.logo}>
                &gt; Jet004<span className={styles.caret}>_</span>
            </div>
            <div className={styles.navLinks}>
                {navLinks &&
                    navLinks.map((link) => (
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? `${styles.link} ${styles.active}`
                                    : styles.link
                            }
                            to={link.path}
                        >
                            {link.page}
                        </NavLink>
                    ))}
                <ThemeToggle mode={mode} themeSwitch={themeSwitch} />
            </div>
        </div>
    );
};

export default Nav;

const styles = {
    navContainer:
        "inset-x-0 inset-t-0 h-16 flex justify-between items-center text-xl bg-theme shadow-xl",
    logo: "font-mono ml-4 xl:ml-[calc(calc(100%-1280px)*0.6)] text-theme",
    caret: "animate-[blink_1.5s_ease_infinite]",
    navLinks:
        "flex min-w-[300px] items-center pl-3 py-3 xl:mr-[calc(calc(100%-1280px)*.6)] border-b-2 border-sky-500",
    link: "mx-1 p-1 text-theme text-theme-hover text-xl font-light",
    active: "text-theme-sky",
};
