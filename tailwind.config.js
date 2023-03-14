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
                primary: "#144DDF",
                "primary-dark": "#3f51b5",
                gradient: ["#144DDF", "#3a4e9f"],
                dark: "#121212",
                "dark-50": "#444",
                light: "#fefefe",
                "light-50": "#dedede",
            },
        },
    },
    safelist: [
        {
            pattern: /col-span-[1-6]/,
        },
        {
            pattern: /text-([2-7]xl|xs|sm|base|lg|xl)/,
        },
    ],
    plugins: [],
};
