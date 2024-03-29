import { useState, useEffect, useMemo } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Socials from "./components/Socials";
import Toast, { ToastInputs } from "./components/Toast";
import { ToastContext, ScreenWidthContext, Context } from "./context/context";

// Get theme from localStorage, set to dark mode as default if
// localStorage is not set or contains an invalid value
const getThemeMode = (defaultValue: modes): modes => {
    try {
        const storedMode = localStorage.getItem("themeMode");
        if (storedMode == "dark" || storedMode == "light") {
            return storedMode;
        }

        return defaultValue;
    } catch {
        return defaultValue;
    }
};

const App = (): JSX.Element => {
    const [themeMode, setThemeMode] = useState<modes>(getThemeMode("dark"));
    const [toastData, setToastData] = useState<ToastInputs | null>(null);
    const [screenWidth, setScreenWidth] = useState<number>(getScreenWidth());
    console.log(screenWidth);
    // Set theme to localStorage on change
    useEffect(() => {
        localStorage.setItem("themeMode", themeMode);

        // Set class on html tag to toggle theme
        const htmlElement = document.getElementById("root");
        if (themeMode === "light") {
            htmlElement?.classList.remove("dark");
        } else if (themeMode === "dark") {
            htmlElement?.classList.add("dark");
        }
    }, [themeMode]);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(getScreenWidth());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Set initial toast context data
    const initialToast: Context.ToastContext = useMemo(
        () => ({
            showToast: ({ status, message }: ToastInputs) =>
                setToastData({
                    message: message,
                    status: status,
                }),
        }),
        [toastData]
    );

    return (
        <>
            <ScreenWidthContext.Provider value={screenWidth}>
                <Nav mode={themeMode} themeSwitch={setThemeMode} />
                <Socials />
            </ScreenWidthContext.Provider>
            <div className={styles.spacer}></div>
            <div id="container" className={styles.container}>
                <ToastContext.Provider value={initialToast}>
                    <Outlet />
                </ToastContext.Provider>
            </div>
            {toastData && (
                <Toast
                    status={toastData?.status}
                    message={toastData?.message}
                    setState={setToastData}
                />
            )}
        </>
    );
};

export default App;

const styles = {
    spacer: "flex h-32 bg-body-theme",
    container: "flex flex-col items-center min-w-[320px]",
};

const getScreenWidth = () => window.innerWidth;
