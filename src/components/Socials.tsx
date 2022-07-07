import { FaEnvelope } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Socials = () => {
  return (
    <div className={styles.socials}>
        <div className={styles.icons}>
            <FaGithub className={styles.icon} />
            <FaLinkedin className={styles.icon} />
            <FaEnvelope className={styles.icon} />
        </div>
    </div>
  )
}

export default Socials

const styles = {
    socials: "fixed right-0 sm:right-4 top-16 w-52 h-16",
    icons: "flex justify-around inset text-sky-600 dark:text-sky-500 text-3xl pt-5",
    icon: "cursor-pointer"
}