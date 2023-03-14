<template>
    <AppHeader header_sticky />
    <main class="grid grid-cols-12">
        <DashboardNav class="col-span-2" />
        <NuxtPage class="col-span-10 py-14 h-[calc(100vh-70px)] overflow-y-auto custom-scroll" />
    </main>
</template>
<script setup></script>
