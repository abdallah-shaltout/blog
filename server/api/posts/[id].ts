import data from "~/assets/data/posts.json";

// export default defineEventHandler((event) => data.filter((item) => !item.pined).sort((a: any, b: any) => a - b));
export default defineEventHandler((event) => {
    let found = data.find((post) => post.id == event.context.params.id);
    if (found) {
        return found;
    } else {
        setResponseStatus(404, "Post Not Found");
    }
});
