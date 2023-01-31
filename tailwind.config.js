/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue"],
    theme: {
        screens: {
            xl: { max: "1399px" },

            lg: { max: "1199px" },

            md: { max: "991px" },

            sm: { max: "767px" },

            xs: { max: "576px" },
        },
        container: {
            center: true,
        },
        extend: {
            width: {
                nine: "90%",
            },
            colors: {
                "main-1": "#04af77",
                "main-2": "#008751",
                "body-1": "#121212",
                "body-2": "#0e0e0e",
                "white-0": "#ffffffbf",
                "white-1": "#eee",
                "white-2": "#fff",
            },
        },
    },
    plugins: [],
};
