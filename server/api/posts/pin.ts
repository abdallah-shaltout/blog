import data from "~/assets/data/posts.json";

export default defineEventHandler((event) => {
    let found = data.find((item) => item.pined);
    if (found) {
        return found;
    } else {
        return data.sort((a: any, b: any) => a.id - b.id)[0];
    }
});
