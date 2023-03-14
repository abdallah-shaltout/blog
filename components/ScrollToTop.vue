<template>
    <button @click="scroll_to_top" class="fixed bottom-8 right-10 flex-center w-12 h-12 bg-dark rounded-md transition-transform hover:-translate-y-2 duration-300 ease-in-out shadow">
        <ArrowIcon class="w-8 h-8 text-primary" />
    </button>
</template>
<script setup>
import ArrowIcon from "~/assets/icons/arrow-up.svg";
const scroll_to_top = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};
</script>
