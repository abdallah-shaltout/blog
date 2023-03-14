<template>
    <transition name="slide-down" mode="out-in" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
        <slot />
    </transition>
</template>

<script setup>
const height = ref(0);

const beforeEnter = (el) => {
    el.style.maxHeight = "0";
};

const enter = (el, done) => {
    height.value = el.scrollHeight;
    el.style.maxHeight = `${height.value}px`;

    // Wait for the transition to finish
    setTimeout(done, 300);
};

const beforeLeave = (el) => {
    el.style.maxHeight = `${height.value}px`;
};

const leave = (el, done) => {
    el.style.maxHeight = "0";

    // Wait for the transition to finish
    setTimeout(done, 300);
};
</script>
<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
    transition: max-height 0.3s ease;
}

.slide-down-enter-to,
.slide-down-leave-from {
    overflow: hidden;
    max-height: 500px;
}

.slide-down-enter-from,
.slide-down-leave-to {
    overflow: hidden;
    max-height: 0;
}
</style>
