<template>
    <article class="bg-dark overflow-hidden rounded-lg shadow">
        <nuxt-link :to="{ name: 'post-id', params: { id: post.id } }" class="aspect-video block w-full overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                class="w-full object-cover transition-transform duration-700 hover:scale-125 hover:rotate-12"
                alt="No Text needd" />
        </nuxt-link>
        <div class="p-4 flex flex-col gap-4">
            <div class="flex-between font-semibold text-sm">
                <b class="rounded-full font-bold block text-primary">{{ post.author }}</b>
                <span class="block text-light-50">{{ post.time }}</span>
            </div>
            <nuxt-link :to="{ name: 'post-id', params: { id: post.id } }">
                <!-- <h2 class="text-lg font-bold text-gray-800 h-16 py-1 overflow-hidden">{{ post.title.length > 75 ? post.title.slice(0, 75) + "..." : post.title }}</h2> -->
                <h2 class="text-lg font-bold text-light h-16 py-1 overflow-hidden">{{ post.title.length > 75 ? `${post.id}-${post.title.slice(0, 75)}...` : `${post.id}-${post.title}` }}</h2>
            </nuxt-link>
            <p class="text-sm text-light-50">{{ post.description.length > 105 ? post.description.slice(0, 105) + "..." : post.description }}</p>
            <ul class="flex gap-4 justify-center">
                <li v-for="(tag, tag_idx) in post.tags.length > 3 ? post.tags.slice(0, 3) : post.tags" :key="tag_idx">
                    <a href="#" class="text-light-50 block px-3 bg-dark-50 rounded-sm py-1 font-semibold capitalize shadow-sm shadow-primary trans hover:bg-primary">
                        {{ tag }}
                    </a>
                </li>
            </ul>
        </div>
    </article>
</template>

<script setup>
const props = defineProps({
    post: Object,
});
</script>
