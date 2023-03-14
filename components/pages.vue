<template>
    <ul dir="rtl">
        <li v-for="(link, idx) in links" :key="idx">
            <NuxtLink @click="closeMenu" :to="{ name: link.name }" class="capitalize" :class="TheClass">{{ link.title }}</NuxtLink>
        </li>
        <!-- <li v-for="(link, idx) in links" :key="idx">
            <a @click="closeMenu" href="https://google.com" class="capitalize" :class="TheClass">{{ link }}</a>
        </li> -->
    </ul>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
    TheClass: String,
    sidebar: Boolean,
});

const emit = defineEmits(["CloseSidebar"]);
const links = ref([
    { title: "الرئيسية", name: "index" },
]);

const closeMenu = () => {
    if (props.sidebar) {
        emit("CloseSidebar");
    }
};
</script>
