import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import * as H from 'history'

const Nav = ({ mode, themeSwitch }: ThemeToggleProps): JSX.Element => {

    interface NavLinks {
        page: String,
        path: H.To
    }

    const navLinks: NavLinks[] = [
        {
            page: "About",
            path: "/about"
        },
        {
            page: "Projects",
            path: "/projects"
        },
        {
            page: "Contact",
            path: "/contact"
        }
    ]

  return (
    <div className={styles.navContainer}>
        <div className={styles.navLinks}>
            { navLinks && navLinks.map( link => (
                <NavLink
                    className={({ isActive }) => isActive ? `${styles.link} text-sky-600 hover:text-sky-800 dark:text-sky-300 hover:dark:text-sky-400` : styles.link }
                    to={ link.path }
                >
                    { link.page }
                </NavLink>
            ) )}
            <ThemeToggle mode={ mode } themeSwitch={ themeSwitch } />
        </div>
    </div>
  )
}

export default Nav

const styles = {
    navContainer: "inset-x-0 inset-t-0 h-16 flex justify-end items-center bg-theme",
    navLinks: "flex min-w-[300px] items-center pl-3 py-3 border-b-2 border-sky-500",
    link: "mx-1 p-1 text-theme text-theme-hover text-xl font-light"
}