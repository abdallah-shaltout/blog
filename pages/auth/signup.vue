<template>
    <section>
        <span class="w-full bg-primary/50 h-96 flex-center">
            <h1 class="text-light text-5xl font-bold">انشاء حساب</h1>
        </span>
        <div class="container">
            <form class="-mt-14 bg-light p-6 shadow max-w-2xl mx-auto rounded-mt-14 backdrop-blur-lg flex flex-col gap-6 rounded relative">
                <div class="flex-between gap-8">
                    <label class="flex flex-col gap-3 flex-1">
                        <span class="text-black/70 text-sm font-bold">الاسم الاول</span>
                        <div
                            class="cursor-pointer flex items-center gap-3 bg-light outline outline-2 outline-black/20 rounded transition-[outline] duration-300 ease-in focus:outline-dark-50 hover:outline-dark-50">
                            <input type="text" class="flex-1 text-lg font-medium focus:outline-none bg-transparent py-1.5 px-3" />
                        </div>
                    </label>
                    <label class="flex flex-col gap-3 flex-1">
                        <span class="text-black/70 text-sm font-bold">اسم العائلة</span>
                        <div
                            class="cursor-pointer flex items-center gap-3 bg-light outline outline-2 outline-black/20 rounded transition-[outline] duration-300 ease-in focus:outline-dark-50 hover:outline-dark-50">
                            <input type="text" class="flex-1 text-lg font-medium focus:outline-none bg-transparent py-1.5 px-3" />
                        </div>
                    </label>
                </div>
                <label class="flex flex-col gap-3">
                    <span class="text-black/70 text-sm font-bold">اسم المستخدم</span>
                    <div
                        class="cursor-pointer flex items-center gap-3 bg-light outline outline-2 outline-black/20 rounded transition-[outline] duration-300 ease-in focus:outline-dark-50 hover:outline-dark-50">
                        <span class="bg-light flex-center py-2 px-3">
                            <person class="w-6 h-6 text-primary trans" />
                        </span>
                        <input type="text" class="flex-1 text-lg font-medium focus:outline-none bg-transparent" />
                    </div>
                </label>
                <label class="flex flex-col gap-3">
                    <span class="text-black/70 text-sm font-bold">البريد الالكتروني</span>
                    <div
                        class="cursor-pointer flex items-center gap-3 bg-light outline outline-2 outline-black/20 rounded transition-[outline] duration-300 ease-in focus:outline-dark-50 hover:outline-dark-50">
                        <span class="bg-light flex-center py-2 px-3">
                            <email class="w-6 h-6 text-primary trans" />
                        </span>
                        <input type="email" class="flex-1 text-lg font-medium focus:outline-none bg-transparent" />
                    </div>
                </label>
                <label class="flex flex-col gap-3">
                    <span class="text-black/70 text-sm font-bold">كلمة المرور</span>
                    <div
                        class="cursor-pointer flex items-center gap-3 bg-light outline outline-2 outline-black/20 rounded transition-[outline] duration-300 ease-in focus:outline-dark-50 hover:outline-dark-50">
                        <span class="bg-light flex-center py-2 px-3">
                            <lock class="w-6 h-6 text-primary trans scale-y-[0.85]" />
                        </span>
                        <input type="password" class="flex-1 text-lg font-medium focus:outline-none bg-transparent" />
                    </div>
                </label>
                <label class="flex flex-col gap-3">
                    <span class="text-black/70 text-sm font-bold">تاكيد كلمة المرور</span>
                    <div
                        class="cursor-pointer flex items-center gap-3 bg-light outline outline-2 outline-black/20 rounded transition-[outline] duration-300 ease-in focus:outline-dark-50 hover:outline-dark-50">
                        <span class="bg-light flex-center py-2 px-3">
                            <lock class="w-6 h-6 text-primary trans scale-y-[0.85]" />
                        </span>
                        <input type="password" class="flex-1 text-lg font-medium focus:outline-none bg-transparent" />
                    </div>
                </label>
                <button class="py-3 font-bold uppercase text-xl rounded shadow-me trans bg-light hover:bg-primary hover:text-light" type="submit">دخول</button>
                <p class="text-center">
                    لديك حساب بالفعل ؟
                    <nuxt-link class="text-primary font-bold trans hover:bg-slate-100 px-2 rounded-sm" :to="{ name: 'auth-signin' }">تسجيل الدخول</nuxt-link>
                </p>
            </form>
        </div>
    </section>
</template>

<script setup>
import person from "~/assets/icons/person.svg";
import lock from "~/assets/icons/lock.svg";
import email from "~/assets/icons/email.svg";

definePageMeta({
    layout: "auth",
});
</script>
