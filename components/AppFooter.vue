<template>
    <footer class="bg-dark/60 text-light py-8 text-sm">
        <div class="container">
            <p>
                جميع الحقوق &copy; محفوظة للمطور <b>{{ devName }}</b>
            </p>
        </div>
    </footer>
</template>

<script setup>
const devName = ref("عبدالله شلتوت");
</script>
