/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            boxShadow: {
                glow: "4px 0 15px 2px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
            },
            keyframes: {
                blink: {
                    "0%, 45%, 100%": { opacity: 1 },
                    "50%, 95%": { opacity: 0 },
                },
            },
        },
    },
    plugins: [],
};
