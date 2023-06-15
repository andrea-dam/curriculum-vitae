/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            serif: ["Montserrat, sans-serif"],
            sans: ["Geologica, sans-serif"],
        },
        colors: {
            text: "#444850",
            background: "#ebeedd",
            accent: "#354568",
        },
        extend: {},
    },
    plugins: [],
};
