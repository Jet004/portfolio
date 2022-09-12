import { useState, useEffect, useMemo } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Socials from "./components/Socials";
import Toast, { ToastProps, ToastInputs } from "./components/Toast";
import { ToastContext, Context } from "./context/context";

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
    const [toastData, setToastData] = useState<ToastInputs | null>({
        status: "success",
        message: "I'm here",
    });

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
            <Nav mode={themeMode} themeSwitch={setThemeMode} />
            <Socials />
            <div className={styles.container}>
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
    container: "flex flex-col items-center mb-12",
};
