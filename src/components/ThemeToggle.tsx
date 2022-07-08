// Import icons
import { MdOutlineLightMode } from 'react-icons/md'
import { MdDarkMode } from 'react-icons/md'

const ThemeToggle = ({ mode, themeSwitch }: ThemeToggleProps): JSX.Element => {
  return (
    <div>
        { mode === "dark" 
            ? (
                <div className={styles.toggle} onClick={() => themeSwitch("light")}>
                    <MdOutlineLightMode />
                </div>
            ) 
            : (
                <div className={styles.toggle} onClick={() => themeSwitch("dark")}>
                    <MdDarkMode />
                </div>
            )}
    </div>
  )
}

export default ThemeToggle

const styles = {
    toggle: "cursor-pointer text-2xl mr-3 ml-2 text-theme text-theme-hover",
}