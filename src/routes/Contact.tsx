import { useContext } from "react";
import emailjs from "@emailjs/browser";
import { ToastContext } from "../context/context";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Import Components
import Main from "../layout/Main";
import PageTitle from "../components/PageTitle";

interface FormValues {
    name: string;
    email: string;
    message: string;
}

const validationSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters long")
        .max(100, "Name must be less than 100 characters long"),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required")
        .max(100, "Email must be less than 100 characters long"),
    message: yup
        .string()
        .required("Message is required")
        .min(2, "Message must be at least 2 characters long")
        .max(2000, "Message must be less than 2000 characters long"),
});

const Contact = (): JSX.Element => {
    // Access toast from context
    const toast = useContext(ToastContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (formData: FormValues) => {
        try {
            if (
                !process.env.EMAIL_SERVICE ||
                !process.env.EMAIL_TEMPLATE ||
                !process.env.EMAIL_PUBLIC_KEY
            ) {
                return toast?.showToast({
                    status: "error",
                    message: "Missing email service environment config",
                });
            }

            const response = await emailjs.send(
                process.env.EMAIL_SERVICE,
                process.env.EMAIL_TEMPLATE,
                { ...formData },
                process.env.EMAIL_PUBLIC_KEY
            );

            if (response.status !== 200) {
                return toast?.showToast({
                    status: "error",
                    message:
                        "An unexpected error occured: Failed to send email",
                });
            }

            toast?.showToast({ message: "Email sent successfully" });

            console.log(response.status, response.text);
        } catch (error) {
            console.log(error);
            toast?.showToast({
                status: "error",
                message: "An unexpected error occured: Failed to send email",
            });
        }
    };

    return (
        <>
            <PageTitle title="Contact Me" />
            <Main styleProp={styles.main}>
                <p className={styles.description}>
                    If you have any questions or comments, please feel free to
                    contact me. I am currently looking for opportunities and am
                    open to client enquiries or employment offers.
                </p>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.formContainer}>
                        <div className={styles.formItem}>
                            <input
                                type="text"
                                placeholder="Name"
                                className={styles.input}
                                {...register("name")}
                            />
                            <p className={styles.error}>
                                {errors?.name?.message || " "}
                            </p>
                        </div>
                        <div className={styles.formItem}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className={styles.input}
                                {...register("email")}
                            />
                            <p className={styles.error}>
                                {errors?.email?.message || " "}
                            </p>
                        </div>
                        <div className={styles.formItem}>
                            <textarea
                                rows={6}
                                placeholder="Message"
                                className={styles.input}
                                {...register("message")}
                            ></textarea>
                            <p className={styles.error}>
                                {errors?.message?.message || " "}
                            </p>
                        </div>
                        <input
                            type="submit"
                            value="Send"
                            className={styles.submit}
                        />
                    </div>
                </form>
            </Main>
        </>
    );
};

export default Contact;

const styles = {
    main: "flex-col p-8 min-w-[320px]",
    description: "sm:self-center max-w-lg my-2",
    form: "flex justify-center w-full mt-2 text-slate-600",
    formContainer:
        "flex flex-col justify-center items-center w-full max-w-lg mt-4",
    formItem: "flex flex-col items-center w-full pb-2",
    input: "w-full p-2 border-b-2 border-theme-500 outline-1 outline-sky-600 dark:outline-sky-400",
    submit: "w-full text-theme-sky font-medium dark:font-normal border border-theme-sky shadow-md button-themed rounded-lg px-3 py-1 mb-2",
    error: "self-start text-red-500 font-mono text-xs p-2",
};
