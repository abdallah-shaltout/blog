<template>
    <!-- First Big Card Start -->
    <section class="py-14" v-if="pin_post_num == 1">
        <div class="container">
            <figure class="grid grid-cols-7 gap-2 bg-dark rounded-md">
                <figcaption class="col-span-3 flex flex-col gap-1 p-3">
                    <span class="text-light-50 text-sm mr-auto">{{ post.time }}</span>
                    <ul class="mt-2 flex gap-2 justify-end">
                        <li v-for="(tag, tag_idx) in post.tags.length > 2 ? post.tags.slice(0, 2) : post.tags" :key="tag_idx">
                            <a href="#" class="block px-3 py-0.5 bg-primary text-light rounded-2xl trans hover:bg-primary-dark font-semibold capitalize">{{ tag }}</a>
                        </li>
                    </ul>
                    <nuxt-link :to="{ name: 'post-id', params: { id: post.id } }">
                        <h2 class="text-2xl font-bold mt-2 text-primary trans hover:text-primary-dark">{{ post.title }}</h2>
                    </nuxt-link>
                    <p class="text-sm text-light-50 leading-7">
                        {{ post.description.slice(0, 150) }}...<nuxt-link :to="{ name: 'post-id', params: { id: post.id } }" class="text-light-50 trans hover:text-primary"><b>المزيد</b></nuxt-link>
                    </p>
                    <p class="text-light-50 font-bold mt-auto">
                        الناشر : <b>{{ post.author }}</b>
                    </p>
                </figcaption>
                <nuxt-link :to="{ name: 'post-id', params: { id: post.id } }" class="col-span-4 overflow-hidden">
                    <img :src="post.image" class="w-full object-cover block rounded-lg transition-transform duration-700 hover:scale-[1.15] hover:rotate-6" alt="No Text needd" />
                </nuxt-link>
            </figure>
        </div>
    </section>
    <!-- First Big Card End -->

    <!-- Second Big Card Start -->
    <section class="py-14" v-if="pin_post_num == 2">
        <div class="container">
            <article class="block w-full mx-auto aspect-video rounded-sm relative text-light overflow-hidden">
                <nuxt-link :to="{ name: 'post-id', params: { id: post.id } }">
                    <img :src="post.image" class="w-full object-cover brightness-[0.85]" alt="No Text needd" />
                </nuxt-link>
                <span class="flex-center absolute right-2 top-2 bg-primary p-2 rounded-lg">
                    <PinIcon class="w-5 h-5 text-light" />
                </span>
                <div class="flex flex-col absolute right-0 bottom-0 p-6 w-full">
                    <nuxt-link :to="{ name: 'post-id', params: { id: post.id } }" class="block">
                        <p class="font-bold text-sm text-gray-100">{{ post.time }} <b class="text-3xl rounded-full font-bold">.</b> {{ post.author }}</p>
                        <h2 class="text-2xl font-bold mt-2 mb-5">{{ post.title }}</h2>
                        <p class="text-sm text-gray-100">{{ post.description.slice(0, 150) }}...<b class="text-gray-100">المزيد</b></p>
                    </nuxt-link>
                    <ul class="flex mt-6 gap-4">
                        <li v-for="(tag, tag_idx) in post.tags" :key="tag_idx">
                            <a href="#" class="block px-6 py-1 rounded-2xl outline outline-2 outline-slate-50 trans duration-500 hover:bg-primary/60 hover:outline-0 font-semibold">{{ tag }}</a>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
    </section>
    <!-- Second Big Card End -->

    <!-- Third Big Card Start -->

    <section class="py-16" v-if="pin_post_num == 3">
        <div class="container">
            <figure class="flex gap-6 rounded-md items-center">
                <figcaption class="flex-1 flex flex-col gap-3 p-4 w-nine">
                    <ul class="mt-2 flex gap-2">
                        <li v-for="(tag, tag_idx) in post.tags.length > 2 ? post.tags.slice(0, 4) : post.tags" :key="tag_idx">
                            <!-- <a href="#" class="block px-3 py-0.5 bg-primary text-light rounded-2xl trans hover:bg-primary-dark text-sm font-semibold capitalize">{{ tag }}</a> -->
                            <a href="#" class="block px-3 py-0.5 btn-1-outline rounded-2xl text-sm capitalize">{{ tag }}</a>
                        </li>
                    </ul>
                    <nuxt-link :to="{ name: 'post-id', params: { id: post.id } }">
                        <h2 class="text-2xl font-bold mt-2 text-light-50 trans hover:text-primary-dark transition-transform hover:-translate-x-5 duration-500">{{ post.title }}</h2>
                    </nuxt-link>
                    <p class="text-sm text-light-50 leading-7">
                        {{ post.description.slice(0, 150) }}...<nuxt-link :to="{ name: 'post-id', params: { id: post.id } }" class="text-light-50 trans hover:text-primary"><b>المزيد</b></nuxt-link>
                    </p>
                    <nuxt-link :to="{ name: 'index' }" class="flex-center gap-3 ml-auto mt-4 card-shape">
                        <div class="relative w-10 h-10">
                            <span class="absolute w-full h-full bg-primary left-2 top-2 rounded-full duration-150"></span>
                            <img :src="pic_link" alt="author avatar" class="w-full h-full object-cover block rounded-full absolute -left-1 -top-1 duration-150" />
                        </div>
                        <strong class="text-light">{{ post.author }}</strong>
                        <span class="block text-light-50/60 text-sm tracking-wider">{{ post.time }}</span>
                    </nuxt-link>
                </figcaption>
                <nuxt-link :to="{ name: 'post-id', params: { id: post.id } }" class="flex-1 w-full h-72 relative card-shape">
                    <span class="absolute w-full h-full bg-dark/40 left-5 top-5 rounded-sm duration-500"></span>
                    <img :src="post.image" class="w-full h-full object-cover block rounded-sm absolute -left-5 -top-5 duration-500" alt="No Text needd" />
                </nuxt-link>
            </figure>
        </div>
    </section>
    <!-- Third Big Card End -->

    <!-- <button class="w-fit block bg-primary text-light px-4 py-2 mx-auto my-4" v-for="(item, idx) in count" :key="idx" @click="change(idx + 1)">change - {{ idx + 1 }}</button> -->
</template>
<script setup>
import PinIcon from "~/assets/icons/pin.svg";
const pin_post_num = ref(3);
// const count = ref(3);
const pic_link = ref("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&w=1000&q=80");
defineProps({
    post: {
        type: Object,
        required: true,
    },
});
const change = (num) => {
    pin_post_num.value = num;
};
</script>
