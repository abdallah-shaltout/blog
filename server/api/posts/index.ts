import data from "~/assets/data/posts.json";

// export default defineEventHandler((event) => data.filter((item) => !item.pined).sort((a: any, b: any) => a - b));
export default defineEventHandler((event) => {
    const query = getQuery(event);
    let limit = query.limit || 3;
    return data
        .filter((item) => !item.pined)
        .sort((a: any, b: any) => a - b)
        .slice(0, +limit);
});
