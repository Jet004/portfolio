import { createContext } from "react";
import { Status, ToastInputs } from "../components/Toast";

export declare namespace Context {
    export interface ToastContext {
        showToast: ({ status, message }: ToastInputs) => void;
    }
}

export const ToastContext = createContext<Context.ToastContext | null>(null);
