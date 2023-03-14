<template>
    <main>
        <AppHeader />
        <NuxtPage />
        <AppFooter />
    </main>
    <Transition name="fade-in">
        <ScrollToTop v-if="current_scroll >= 600" />
    </Transition>
</template>
<script setup>
const current_scroll = ref(0);
if (process.client) {
    window.addEventListener("scroll", function () {
        current_scroll.value = this.scrollY;
    });
    onMounted(() => {
        current_scroll.value = window.scrollY;
    });
}
</script>
