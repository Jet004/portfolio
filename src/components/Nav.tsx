import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Nav = ({ mode, themeSwitch }: ThemeToggleProps): JSX.Element => {

    const linkClass = (isActive: boolean) => isActive ? `${styles.link} text-sky-600 hover:text-sky-800 dark:text-sky-300 hover:dark:text-sky-400` : styles.link 

  return (
    <div className={styles.navContainer}>
        <div className={styles.navLinks}>
            <NavLink className={({ isActive }) => linkClass(isActive)} to="/about">About</NavLink>
            <NavLink className={({ isActive }) => linkClass(isActive)} to="/projects">Projects</NavLink>
            <NavLink className={({ isActive }) => linkClass(isActive)} to="/contact">Contact</NavLink>
            <ThemeToggle mode={ mode } themeSwitch={ themeSwitch } />
        </div>
    </div>
  )
}

export default Nav

const styles = {
    navContainer: "inset-x-0 inset-t-0 h-16 flex justify-end items-center bg-theme",
    navLinks: "flex items-center pl-3 py-3 border-b-2 border-sky-500",
    link: "mx-1 p-1 text-theme text-xl font-light"
}