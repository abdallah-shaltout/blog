<template>
    <div class="text-light">
        <section calss="h-screen flex-center bg-primary text-light" v-if="pending">
            <b calss="text-4xl">جاري التحميل</b>
        </section>
        <section class="py-14 bg-dark/40">
            <div class="container">
                <button @click="goback" class="flex justify-center items-center gap-4 text-light bg-dark py-2 px-10 mb-5 rounded-full mr-auto w-fit trans hover:bg-primary-dark font-semibold">
                    <!-- <strong class="block text-sm">رجوع</strong> -->
                    <ArrowLeft class="w-7 block" />
                </button>
                <div class="grid grid-cols-6 gap-6">
                    <nav class="col-span-2 self-start rounded sticky top-5" v-if="head_list.length > 1">
                        <strong
                            class="block pb-6 text-xl text-light relative before:content-[''] before:absolute before:w-14 before:h-1.5 before:rounded-lg before:bottom-2 before:right-0 before:bg-primary after:content-[''] after:absolute after:w-24 after:h-1.5 after:rounded-lg after:-bottom-1 after:right-0 after:bg-primary"
                            >المحتوي</strong
                        >
                        <ul class="py-1 flex flex-col gap-3 mt-4">
                            <li v-for="(title, idx) in head_list" :key="idx">
                                <a
                                    :href="`#${title.id_hash}`"
                                    class="block text-light-50 trans w-fit px-3 py-1 before:rounded relative font-medium text-base before:content-[''] before:absolute before:right-0 before:top-0 before:bg-primary/80 before:h-full before:w-full before:-z-[1] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in hover:before:scale-100 hover:before:origin-right"
                                    :class="{ 'before:scale-x-100 before:!origin-right': title.active }">
                                    <strong class="text-primary trans" :class="{ '!text-light': title.active }">{{ title.tag_name == "h2" ? "#" : "# #" }}</strong> {{ title.title }}
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <article :class="{ 'col-span-4': head_list.length > 1, 'col-span-6': head_list.length < 1 }">
                        <img :src="post.image" :alt="post.title" class="w-full aspect-video rounded-lg" />
                        <div class="p-4 mt-8 rounded-sm shadow-sm">
                            <!-- <div class="flex-between font-semibold text-sm">
                                <b class="rounded-full font-bold block text-light">{{ post.author }}</b>
                                <span class="block text-light-50">{{ post.time }}</span>
                            </div> -->
                            <h1 class="text-3xl mb-6 font-semibold leading-[1.6]">{{ post.title }}</h1>
                            <ul class="flex gap-2">
                                <li v-for="(tag, tag_idx) in post.tags.length > 2 ? post.tags.slice(0, 4) : post.tags" :key="tag_idx">
                                    <!-- <a href="#" class="block px-3 py-0.5 bg-primary text-light rounded-2xl trans hover:bg-primary-dark text-sm font-semibold capitalize">{{ tag }}</a> -->
                                    <a href="#" class="block px-4 py-1 bg-dark rounded-2xl text-sm capitalize trans hover:bg-primary">{{ tag }}</a>
                                </li>
                            </ul>
                            <nuxt-link :to="{ name: 'index' }" class="flex items-center gap-5 my-10 card-shape">
                                <div class="relative w-10 h-10">
                                    <span class="absolute w-full h-full bg-primary left-2 top-2 rounded-full duration-150"></span>
                                    <img :src="pic_link" alt="author avatar" class="w-full h-full object-cover block rounded-full absolute -left-1 -top-1 duration-150" />
                                </div>
                                <div class="flex flex-col">
                                    <strong class="text-light">{{ post.author }}</strong>
                                    <span class="block text-light-50/60 text-sm tracking-wider">{{ post.time }}</span>
                                </div>
                            </nuxt-link>
                            <!-- <hr class="bg-primary block mb-4" /> -->
                            <div class="post-body text-light" ref="post_body" v-html="post.body"></div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import ArrowLeft from "@/assets/icons/arrow-left.svg";
const route = useRoute();
const router = useRouter();
const pic_link = ref("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&w=1000&q=80");
const post_body = ref(null);
const { data: post, pending, error } = await useAsyncData("found_post", () => $fetch(`/api/posts/${route.params.id}`));
const head_list = ref([]);
if (error.value) {
    router.push({ name: "index" });
}
useHead({
    title: post.value.title,
    meta: [
        // {
        //     name: "og:title",
        //     content: ,
        // },
        // {
        //     name: "description",
        //     content: `${post.value.description.slice(0, 150)}...المزيد`,
        // },
        // {
        //     name: "description",
        //     content: `${post.value.description.slice(0, 150)}...المزيد`,
        // },
    ],
});
const goback = () => {
    router.back();
};
onMounted(() => {
    let post_content = post_body.value.querySelectorAll("h2,h3");
    for (let i = 0; i < post_content.length; i++) {
        post_content[i].id = i;
        head_list.value.push({ title: post_content[i].innerText, id_hash: i, tag_name: post_content[i].nodeName.toLowerCase(), active: false });
    }

    const observer = new IntersectionObserver(
        (entres) => {
            entres.forEach((entry) => {
                if (entry.isIntersecting) {
                    let idx = head_list.value.findIndex((ele) => ele.title == entry.target.innerText);
                    head_list.value[idx].active = true;
                } else {
                    let idx = head_list.value.findIndex((ele) => ele.title == entry.target.innerText);
                    head_list.value[idx].active = false;
                }
            });
        },
        {
            // threshold: 0.1,
        }
    );

    post_content.forEach((sec) => observer.observe(sec));
});
</script>
