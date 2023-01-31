<template>
    <header class="h-[70px] flex-between bg-body-2 shadow-slate-50">
        <div class="container">
            <nav class="flex-between">
                <!-- <nuxt-link :to="{ name: 'index' }"><img src="~/assets/images/logo.png" alt="Abdallah Shaltout" class="w-52 sm:w-40" /></nuxt-link> -->
                <nuxt-link :to="{ name: 'index' }" class="text-4xl font-bold text-main-1">Logo</nuxt-link>
                <pages class="flex gap-1 md:hidden" TheClass="page-link-1" />
                <button class="menu hidden md:flex" :class="{ active: menuToggle }" @click="menuToggle = !menuToggle">
                    <MenuIcon class="w-full" />
                </button>
            </nav>
        </div>
    </header>
    <Transition name="burger_menu">
        <aside v-if="menuToggle" class="bg-slate-50 w-full py-4 shadow-lg shadow-indigo-500/10 hidden md:block transition-transform ease-in-out duration-300 absolute z-20 top-[70px] origin-top">
            <pages TheClass="page-link-2" class="flex flex-col gap-3" sidebar @CloseSidebar="closeSidebar" />
        </aside>
    </Transition>
</template>
<script setup>
import MenuIcon from "~/assets/icons/menu.svg";
const menuToggle = ref(false);
const closeSidebar = () => {
    menuToggle.value = false;
};
</script>
