import { createContext } from "react";
import { ToastInputs } from "../components/Toast";

export declare namespace Context {
    export interface ToastContext {
        showToast: ({ status, message }: ToastInputs) => void;
    }
}

export const ToastContext = createContext<Context.ToastContext | null>(null);

export const ScreenWidthContext = createContext<number>(0);
