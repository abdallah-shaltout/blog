<template>
    <section>
        <pinPost :post="PinedPost" v-if="PinedPost" />
        <section class="py-14">
            <div class="container">
                <div class="grid grid-cols-3 lg:grid-cols-2 gap-4">
                    <TransitionGroup name="list">
                        <PostCard v-for="post in AllPosts" :key="post.id" :post="post" />
                    </TransitionGroup>
                </div>
            </div>
            <button v-if="limit < PostsCount.result" @click="increment" class="btn-1-outline py-2 px-6 rounded mx-auto w-fit mt-14">
                {{ loading ? "جاري التحميل ..." : "عرض المزيد" }}
            </button>
        </section>
    </section>
</template>

<script setup>
const limit = ref(3);
const loading = ref(false);
const { data: PinedPost } = await useAsyncData("pined_post", () => $fetch("/api/posts/pin"));
const { data: AllPosts, refresh } = await useAsyncData("all_posts", () => $fetch(`/api/posts?limit=${limit.value}`));
const { data: PostsCount } = await useAsyncData("post_count", () => $fetch("/api/posts/count"));
const increment = async () => {
    limit.value += 3;
    loading.value = true;
    await refresh({ dedupe: true });
    loading.value = false;

    // setTimeout(async () => {
    //     await useLazyAsyncData("all_posts", () => $fetch(`/api/posts?limit=${limit.value}`));
    // }, 200);
};
</script>
