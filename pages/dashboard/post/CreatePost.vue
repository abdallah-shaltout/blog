<template>
    <section>
        <div class="container text-center text-4xl text-light">Create post</div>
    </section>
</template>

<script setup>
useHead({
    title: "Home Page",
    meta: [
        { name: "description", content: "Home Page Description" },
        { name: "keywords", content: ["one", "two", "three"].join(",") },
    ],
});

definePageMeta({
    layout: "dashboard",
    pageTransition: { name: "page_transition_fade" },
});
</script>
