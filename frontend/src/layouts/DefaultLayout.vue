<script setup>
import Navbar from "../components/Navbar.vue";
</script>
<template>
<div class="min-h-screen bg-gray-100">
    <Navbar />
    <main class="p-6">
        <RouterView />
    </main>
</div>
</template>