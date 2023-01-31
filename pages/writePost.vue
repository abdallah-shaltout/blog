<template>
    <section class="py-14">
        <div class="container">
            <h2 class="text-center font-bold text-4xl mb-6">HTML Code</h2>
            <textarea v-model="htmlText" style="direction: ltr" class="resize-none font-semibold bg-main-1 p-6 w-full block focus:outline-none rounded-lg shadow text-slate-50"></textarea>
            <hr class="h-1 bg-main-1 my-14" />
            <div v-html="htmlText"></div>
        </div>
    </section>
</template>

<script setup>
const htmlText = ref(null);
watch(htmlText, (val) => {
    navigator.clipboard.writeText(JSON.stringify({ data: val }.data));
});
</script>
