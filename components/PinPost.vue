<template>
    <section class="py-14">
        <div class="container">
            <article class="block w-full mx-auto aspect-video rounded-sm relative text-white overflow-hidden">
                <nuxt-link :to="{ name: 'post-id', params: { id: post.id } }">
                    <img :src="post.image" class="w-full object-cover brightness-[0.85]" alt="No Text needd" />
                </nuxt-link>
                <span class="flex-center absolute right-2 top-2 bg-main-1 p-2 rounded-lg">
                    <PinIcon class="w-5 h-5 text-white" />
                </span>
                <div class="flex flex-col absolute right-0 bottom-0 p-6 w-full">
                    <nuxt-link :to="{ name: 'post-id', params: { id: post.id } }" class="block">
                        <p class="font-bold text-sm text-gray-100">{{ post.time }} <b class="text-3xl rounded-full font-bold">.</b> {{ post.author }}</p>
                        <h2 class="text-2xl font-bold mt-2 mb-5">{{ post.title }}</h2>
                        <p class="text-sm text-gray-100">{{ post.description.slice(0, 150) }}...<b class="text-gray-100">المزيد</b></p>
                    </nuxt-link>
                    <ul class="flex mt-6 gap-4">
                        <li v-for="(tag, tag_idx) in post.tags" :key="tag_idx">
                            <a href="#" class="block px-6 py-1 rounded-2xl outline outline-2 outline-slate-50 trans duration-500 hover:bg-main-1/60 hover:outline-0 font-semibold">{{ tag }}</a>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
    </section>
</template>

<script setup lang="ts">
import PinIcon from "~/assets/icons/pin.svg";
const route = useRoute();
const props = defineProps({
    post: {
        type: Object,
        required: true,
    },
});
</script>
