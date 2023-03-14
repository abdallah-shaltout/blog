<template>
    <section>
        <span class="w-full bg-primary/50 h-96 flex-center">
            <h1 class="text-light text-5xl font-bold">تسجيل الدخول</h1>
        </span>
        <div class="container">
            <form class="-mt-14 bg-light p-6 shadow max-w-2xl mx-auto rounded-mt-14 backdrop-blur-lg flex flex-col gap-3 rounded relative">
                <label class="flex flex-col gap-4">
                    <span class="text-black/70 text-sm font-bold">اسم المستخدم أو البريد الإلكتروني</span>
                    <div
                        class="cursor-pointer flex items-center gap-3 bg-light outline outline-2 outline-black/20 rounded transition-[outline] duration-300 ease-in focus:outline-dark-50 hover:outline-dark-50">
                        <span class="bg-light flex-center py-2 px-3">
                            <person class="w-6 h-6 text-primary trans" />
                        </span>
                        <input type="text" class="flex-1 text-lg font-medium focus:outline-none bg-transparent" />
                    </div>
                </label>
                <label class="flex flex-col gap-4">
                    <span class="text-black/70 text-sm font-bold">كلمة المرور</span>
                    <div
                        class="cursor-pointer flex items-center gap-3 bg-light outline outline-2 outline-black/20 rounded transition-[outline] duration-300 ease-in focus:outline-dark-50 hover:outline-dark-50">
                        <span class="bg-light flex-center py-2 px-3">
                            <lock class="w-6 h-6 text-primary trans scale-y-[0.85]" />
                        </span>
                        <input type="password" class="flex-1 text-lg font-medium focus:outline-none bg-transparent" />
                    </div>
                </label>
                <!-- <label class="flex flex-col gap-2">
                    <span class="text-light-50 font-semibold text-lg">كلمة المرور</span>
                    <div
                        class="cursor-pointer flex items-center py-2 px-3 gap-3 bg-light outline outline-2 outline-dark-50/20 rounded transition-[outline] duration-300 ease-in focus:outline-dark-50 hover:outline-dark-50">
                        <lock class="w-6 h-6 scale-y-[0.85] text-primary" />
                        <input type="password" class="flex-1 text-lg font-medium focus:outline-none" />
                    </div>
                </label> -->
                <label class="flex gap-2 items-center mt-4 mb-2 cursor-pointer">
                    <input type="checkbox" class="accent-primary w-4 block h-4" />
                    <span class="text-black/70 font-semibold text-base">تزكرني</span>
                </label>
                <button class="py-3 font-bold uppercase text-xl rounded shadow-me trans bg-light hover:bg-primary hover:text-light" type="submit">دخول</button>
                <p class="text-center">
                    ليس لديك حساب ؟
                    <nuxt-link class="text-primary font-bold trans hover:bg-slate-100 px-2 rounded-sm" :to="{ name: 'auth-signup' }">إنشاء حساب</nuxt-link>
                </p>
            </form>
        </div>
    </section>
</template>

<script setup>
import person from "~/assets/icons/person.svg";
import lock from "~/assets/icons/lock.svg";

definePageMeta({
    layout: "auth",
});
</script>
