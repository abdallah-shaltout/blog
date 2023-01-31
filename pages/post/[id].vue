<template>
    <div>
        <section calss="h-screen flex-center bg-main-1 text-white" v-if="pending">
            <b calss="text-4xl">جاري التحميل</b>
        </section>
        <section class="py-14 bg-slate-200">
            <div class="container grid grid-cols-4 gap-6">
                <nav class="border-2 border-main-1 self-start rounded" v-if="head_list.length > 2">
                    <b class="block p-4 text-xl">المحتوي</b>
                    <hr class="bg-main-1 block h-0.5 w-full" />
                    <ul class="py-2 flex flex-col gap-1">
                        <li class="text-xs" v-for="(title, idx) in head_list" :key="idx">
                            <a :href="`#${title.id_hash}`" class="bg-main-1 block py-4 text-slate-50 rounded px-2 font-medium trans hover:bg-indigo-800">
                                {{ title.title }}
                            </a>
                        </li>
                    </ul>
                </nav>
                <article class="col-span-3" :class="{ 'col-span-4': head_list.length < 2 }">
                    <img :src="post.image" :alt="post.title" class="w-full aspect-video rounded-lg" />
                    <div class="p-4 bg-white mt-8 rounded-sm shadow-sm">
                        <div class="flex-between font-semibold text-sm">
                            <b class="rounded-full font-bold block text-gray-700">{{ post.author }}</b>
                            <span class="block text-gray-500">{{ post.time }}</span>
                        </div>
                        <h1 class="text-3xl my-6 font-semibold leading-[1.6]">{{ post.title }}</h1>
                        <hr class="bg-gray-500 block mb-4" />
                        <div class="post-body" v-html="post.body"></div>
                    </div>
                </article>
            </div>
        </section>
    </div>
</template>
<script setup>
const route = useRoute();
const router = useRouter();
const { data: post, pending, error } = await useAsyncData("found_post", () => $fetch(`/api/posts/${route.params.id}`));
const head_list = ref([]);
if (error.value) {
    router.push({ name: "index" });
}

onMounted(() => {
    if (post.value) {
        let res = [];
        let start = 1;
        let post_content = document.querySelectorAll(".post-body h2,.post-body h3");
        if (post_content) {
            post_content.forEach((ele) => {
                ele.id = start;
                res.push({ title: ele.innerText, id_hash: start });
                start++;
            });

            head_list.value = res;
        }
    }
});

// if (post.value) {
//     console.log(post_content);
// }
</script>
<style>
html {
    scroll-behavior: smooth;
}
.post-body :where(h2, h3) {
    padding: 20px;
    display: block;
    margin: 20px auto;
    border-radius: 6px;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #4f46e5;
    color: white;
}
/* .post-body h3 {
    width: 95% !important;
    margin-left: 0 !important;
} */
.post-body img {
    border-radius: 4px;
    margin: 50px auto;
    display: block;
}
</style>
