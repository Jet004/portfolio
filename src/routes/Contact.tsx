import Main from "../layout/Main";
import PageTitle from "../components/PageTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

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
        .email("Invalid email")
        .required("Email is required")
        .max(100, "Email must be less than 100 characters long"),
    message: yup
        .string()
        .required("Message is required")
        .min(2, "Message must be at least 2 characters long")
        .max(2000, "Message must be less than 2000 characters long"),
});

const Contact = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({});

    const onSubmit: SubmitHandler<FormValues> = (formData) => {
        console.log(formData);
    };
    return (
        <>
            <PageTitle title="Contact Me" />
            <Main styleProp={styles.main}>
                <p className={styles.description}>
                    If you have any questions or comments, please feel free to
                    contact me.
                </p>
                <form
                    name="contact"
                    className={styles.form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className={styles.formContainer}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className={styles.input}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className={styles.input}
                        />
                        <textarea
                            rows={6}
                            name="message"
                            placeholder="Message"
                            className={styles.input}
                        ></textarea>
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
    main: "flex-col p-8",
    description: "sm:text-center my-2",
    form: "flex justify-center w-full mt-2 text-slate-600",
    formContainer:
        "flex flex-col justify-center items-center w-full max-w-lg mt-4",
    input: "w-full p-2 border-b-2 border-theme-500 mb-8 outline-1 outline-sky-600 dark:outline-sky-400",
    submit: "w-full text-theme-sky font-medium dark:font-normal border border-theme-sky shadow-md button-themed rounded-lg px-3 py-1 mb-2",
};
