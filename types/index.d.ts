type modes = "dark" | "light"

interface ThemeToggleProps {
    mode: modes,
    themeSwitch: React.Dispatch<React.SetStateAction<modes>>
}