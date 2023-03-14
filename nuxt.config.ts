// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/css/tailwind-base.css", "~/assets/css/tailwind-components.css", "~/assets/css/tailwind-utilities.css", "~/assets/css/master.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ["nuxt-svgo"],
    app: {
        pageTransition: { name: "page_transition" },
        head: {
            // title: import.meta.env.NUXT_APP_TITLE?.toString() || "Shaltout Blog from Text",
            title: "Shaltout Blog",
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1.0",
            htmlAttrs: {
                lang: "ar",
                dir: "rtl",
            },
            meta: [{ name: "description", content: "My amazing site." }],
        },
    },
    runtimeConfig: {
        // Private config that is only available on the server
        AppTitle: process.env.NUXT_APP_TITLE,
        // public: {
        //     // OTHER_NAME: process.env.NUXT_APP_TITLE,
        // },
    },
    routeRules: {
        "/admin/**": { ssr: false },
    },
});
