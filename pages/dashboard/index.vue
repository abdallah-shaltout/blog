<template>
    <section>
        <h1 class="dashroom-section-title">Dashroom</h1>
        <div class="container text-light-50">
            <ul class="grid grid-cols-3 gap-3">
                <li class="dashroom-top-card">
                    <viewIcon class="w-10 mx-auto mb-2 text-primary trans" />
                    <h3 class="text-2xl font-bold">{{ (500000).toLocaleString("en-US") }}</h3>
                    <p class="text-xl font-medium">عدد الزيارات</p>
                </li>
                <li class="dashroom-top-card">
                    <messageIcon class="w-10 mx-auto mb-2 text-primary trans" />
                    <h3 class="text-2xl font-bold">105</h3>
                    <p class="text-xl font-medium">عدد الرسائل</p>
                </li>
                <li class="dashroom-top-card">
                    <PostIcon class="w-10 mx-auto mb-2 text-primary trans" />
                    <h3 class="text-2xl font-bold">300</h3>
                    <p class="text-xl font-medium">عدد المواضيع</p>
                </li>
            </ul>

            <div class="mt-14">
                <h2 class="text-2xl font-bold mb-5">اخر المواضيع</h2>
                <ul class="latest-posts flex flex-col gap-1">
                    <li class="flex-between p-4 rounded-sm gap-2 relative" v-for="post in latest_posts" :key="post">
                        <span class="flex-center font-bold text-xl bg-light rounded text-dark w-10 h-10 absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">{{ post }}</span>
                        <p class="flex-1 mr-3">هذا عنوان احدي المواضيع ولاكن هذا العنوان تجريبي ليس اكتر</p>
                        <div class="flex gap-1">
                            <button class="bg-primary-dark/5 shadow rounded p-3 trans hover:bg-primary-dark">
                                <EditIcon class="text-light-50 w-5 h-5 trans hover:text-light" />
                            </button>
                            <button class="bg-red-600/5 shadow rounded p-3 trans hover:bg-red-600">
                                <DeleteIcon class="text-rose- w-5 h-5 trans hover:text-light" />
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import PostIcon from "~/assets/icons/post-icon.svg";
import viewIcon from "~/assets/icons/eye.svg";
import messageIcon from "~/assets/icons/message.svg";
import EditIcon from "~/assets/icons/edit.svg";
import DeleteIcon from "~/assets/icons/trash.svg";

definePageMeta({
    layout: "dashboard",
    pageTransition: { name: "page_transition_fade" },
});

const latest_posts = ref(4);
</script>
