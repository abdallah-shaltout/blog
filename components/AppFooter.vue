<template>
    <footer class="bg-main-1 text-white py-8 text-sm">
        <div class="container">
            <p>
                جميع الحقوق &copy; محفوظة للمطور <b>{{ name }}</b>
            </p>
        </div>
    </footer>
</template>

<script setup lang="ts">
const name = ref("عبدالله شلتوت");
</script>
