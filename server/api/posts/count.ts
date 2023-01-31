import data from "~/assets/data/posts.json";

export default defineEventHandler((event) => {
    return { result: data.filter((item) => !item.pined).length };
});
