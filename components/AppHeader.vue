<template>
    <header class="h-[70px] flex-between bg-dark/70" :class="{ 'sticky top-0 z-[900] ': header_sticky }">
        <div class="container">
            <nav class="flex-between">
                <ul class="flex items-center gap-2">
                    <li class="dropdown">
                        <a class="dropdown-title" href="#" @click.prevent="show_dropdown = !show_dropdown" :class="{ 'bg-primary': show_dropdown }">
                            <DropdownIcon class="icon" :class="{ 'rotate-180': show_dropdown }" />
                            <span>دخول</span>
                        </a>
                        <SlideDown>
                            <ul class="dropdown-list" v-if="show_dropdown">
                                <li>
                                    <NuxtLink :to="{ name: 'auth-signin' }" class="dropdown-link">تسجيل الدخول</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="{ name: 'auth-signup' }" class="dropdown-link">انشاء حساب</NuxtLink>
                                </li>
                            </ul>
                        </SlideDown>
                    </li>
                </ul>
                <pages class="flex gap-1 md:hidden" TheClass="page-link-1" />
                <button class="menu hidden md:flex md:ml-auto" :class="{ active: menuToggle }" @click="menuToggle = !menuToggle">
                    <MenuIcon class="w-full" />
                </button>
            </nav>
        </div>
    </header>
    <Transition name="burger_menu">
        <aside v-if="menuToggle" class="bg-dark-50 w-full py-4 shadow-lg shadow-primary/5 hidden md:block transition-transform ease-in-out duration-300 absolute z-20 top-[70px] origin-top">
            <pages TheClass="page-link-2" class="flex flex-col gap-3" sidebar @CloseSidebar="closeSidebar" />
        </aside>
    </Transition>
</template>
<script setup>
import MenuIcon from "~/assets/icons/menu.svg";
import DropdownIcon from "~/assets/icons/chevron-down.svg";
const menuToggle = ref(false);
const show_dropdown = ref(false);
const closeSidebar = () => {
    menuToggle.value = false;
};
defineProps({
    header_sticky: Boolean,
    full_show: Boolean,
});
</script>
