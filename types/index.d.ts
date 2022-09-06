type modes = "dark" | "light"

interface ThemeToggleProps {
    mode: modes,
    themeSwitch: React.Dispatch<React.SetStateAction<modes>>
}

// Allow image imports
declare module "*.jpg" {
    const value: any;
    export = value;
}