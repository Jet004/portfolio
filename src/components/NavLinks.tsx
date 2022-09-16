import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import * as H from "history";
import { ScreenWidthContext } from "../context/context";

interface NavLinks {
    page: string;
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

const NavLinks = ({
    mode,
    themeSwitch,
    open,
    toggle,
}: ThemeToggleProps & { open: number; toggle: () => void }): JSX.Element => {
    const screenWidth = useContext(ScreenWidthContext);

    return (
        <div
            className={`${
                screenWidth < 640
                    ? `${styles.navLinksXS} ${
                          open === 0 ? styles.closed : styles.open
                      }`
                    : styles.navLinksSM
            }`}
            {...(screenWidth < 640 ? { onClick: toggle } : {})}
        >
            {navLinks &&
                navLinks.map((link, index) => (
                    <NavLink
                        key={index}
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
    );
};

export default NavLinks;

const styles = {
    navLinksSM:
        "sm:flex sm:flex-row sm:min-w-[300px] items-center pl-3 py-3 xl:mr-[calc(calc(100%-1280px)*.6)] border-b-2 border-sky-500",
    navLinksXS:
        "absolute flex flex-col top-16 right-0 h-auto overflow-hidden bg-slate-300 dark:bg-slate-800 px-12 transition-{height} duration-300",
    link: "mx-1 mb-4 sm:mb-0 sm:p-1 text-theme text-theme-hover text-xl font-light",
    active: "text-theme-sky",
    closed: "max-h-0",
    open: "max-h-80 pt-4 pb-6",
};
