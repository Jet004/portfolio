import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

// Import Icons
import { AiOutlineMenu } from "react-icons/ai";

const Nav = ({ mode, themeSwitch }: ThemeToggleProps): JSX.Element => {
    const [burgerToggle, setBurgerToggle] = useState(0);

    const toggle = () => {
        const height = burgerToggle === 0 ? 80 : 0;
        setBurgerToggle(height);
    };
    return (
        <div className={styles.navContainer}>
            <div className={styles.logo}>
                <NavLink to="/">
                    &gt; Jet004<span className={styles.caret}>_</span>
                </NavLink>
            </div>
            <NavLinks
                mode={mode}
                themeSwitch={themeSwitch}
                open={burgerToggle}
                toggle={toggle}
            />
            <div className={styles.burgerMenu} onClick={toggle}>
                <a href="#">
                    <AiOutlineMenu className={styles.icon} />
                </a>
            </div>
        </div>
    );
};

export default Nav;

const styles = {
    navContainer:
        "fixed inset-x-0 inset-t-0 h-16 flex justify-between items-center min-w-[320px] text-xl bg-slate-300 dark:bg-slate-800 shadow-xl z-50",
    logo: "font-mono ml-4 xl:ml-[calc(calc(100%-1280px)*0.6)] text-theme text-sm sm:text-xl",
    caret: "animate-[blink_1.5s_ease_infinite]",
    burgerMenu: "sm:hidden mr-4",
    icon: "cursor-pointer text-3xl text-theme text-theme-hover",
};
