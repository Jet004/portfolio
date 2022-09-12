import { useEffect } from "react";

export type Status = "success" | "error" | "info";

export interface ToastProps {
    status?: Status;
    message: string;
    setState: (state: null) => void;
}

export type ToastInputs = Omit<ToastProps, "setState">;

const Toast = ({ status, message, setState }: ToastProps) => {
    if (!status) status = "success";
    if (!["success", "error", "info"].includes(status))
        throw new Error("Invalid toast status");

    useEffect(() => {
        setTimeout(() => {
            setState(null);
        }, 5000);
    });

    return (
        <div
            className={`${styles.toast} ${styles.toastStatus[status]}`}
            onClick={() => setState(null)}
        >
            {message}
        </div>
    );
};

export default Toast;

const styles = {
    toast: "absolute left-4 bottom-4 p-2 text-white rounded-lg shadow-xl",
    toastStatus: {
        success: "bg-green-600",
        error: "bg-red-600",
        info: "bg-yellow-600",
    },
};
