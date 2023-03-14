<template>
    <nav class="bg-light-50 shadow shadow-dark-50 h-[calc(100vh-70px)] overflow-y-auto overflow-x-hidden rounded-t-md custom-scroll sticky top-[70px]">
        <ul class="flex flex-col w-full py-4 custom-scroll">
            <li v-for="(link, index) in links" :key="index">
                <NuxtLink v-if="!link.group" class="text-dark-50 w-full block rounded-sm py-3 px-4 trans hover:bg-primary hover:text-light" :to="{ name: link.name }">{{ link.title }}</NuxtLink>
                <a
                    class="text-dark-50 w-full rounded-sm py-3 px-4 trans hover:bg-primary hover:text-light flex-between cursor-pointer"
                    :class="{ 'bg-primary text-light': link.show_group }"
                    @click="link.show_group = !link.show_group"
                    v-if="link.group">
                    {{ link.title }}
                    <ItemArrow class="w-4 h-4 font-bold transition-transform duration-300 ease-in-out" :class="{ 'rotate-180': link.show_group }" />
                </a>
                <SlideDown>
                    <ul v-if="link.show_group">
                        <li v-for="(group_link, i) in link.group" :key="i">
                            <a class="text-dark-50 w-full block rounded-sm py-3 px-4 trans hover:bg-primary hover:text-light" href="#">{{ group_link.title }}</a>
                        </li>
                    </ul>
                </SlideDown>
            </li>
        </ul>
    </nav>
</template>
<script setup>
import ItemArrow from "~/assets/icons/chevron-down.svg";
const links = ref([
    { name: "dashboard", title: "الرئيسية" },
    {
        name: "dashboard-post-CreatePost",
        title: "المواضيع",
        group: [
            { name: "dashboard", title: "انشاء مقالة" },
            { name: "dashboard", title: "تعديل مقالة" },
            { name: "dashboard", title: "المقالات" },
            { name: "dashboard", title: "حذف مقالة" },
        ],
        show_group: false,
    },
    {
        name: "dashboard-settings",
        title: "الاعدادات",
        group: [
            { name: "dashboard", title: "الاعدادات" },
            { name: "dashboard", title: "البيانات" },
            { name: "dashboard", title: "تغيير كلمة السر" },
            { name: "dashboard", title: "اخري" },
        ],
        show_group: false,
    },
]);
</script>
