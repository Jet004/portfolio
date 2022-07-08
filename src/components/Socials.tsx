import { NavLink } from 'react-router-dom'

// Import icons
import { FaEnvelope } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Socials = () => {
  return (
    <div className={styles.socials}>
        <div className={styles.icons}>
            <a href="https://github.com/Jet004" target="_blank">
                <FaGithub className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com/in/jet004/" target="_blank">
                <FaLinkedin className={styles.icon} />
            </a>
            <NavLink to="/contact">
                <FaEnvelope className={styles.icon} />
            </NavLink>
        </div>
    </div>
  )
}

export default Socials

const styles = {
    socials: "fixed right-0 sm:right-4  xl:right-[calc(calc(100%-1280px)*.6)] top-16 w-52 h-16",
    icons: "flex justify-around inset text-sky-600 dark:text-sky-500 text-3xl pt-5",
    icon: "cursor-pointer"
}