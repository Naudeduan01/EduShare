<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";
const router = useRouter();
const auth = useAuthStore();
function sair(){
    auth.logout();
    router.push("/login");
}
</script>
<template>
<nav class="bg-gray-900 text-white px-6 py-4 flex justify-between">
    <div class="font-bold text-2xl">
        <RouterLink to="/">
            EduShare
        </RouterLink>
    </div>
    <div>
        <RouterLink to="/dashboard"class="hover:text-blue-600 cursor-pointer mr-4">
            Dashboard
        </RouterLink>
        <RouterLink to="/novo-trabalho" class="hover:text-blue-600 cursor-pointer mr-4">
            Novo Trabalho
        </RouterLink>
        <RouterLink to="/trabalhos" class="hover:text-blue-600 cursor-pointer mr-4">
            Trabalhos
        </RouterLink>
        <button @click="sair" class="hover:text-blue-600 cursor-pointer mr-4">
            Sair
        </button>
    </div>
</nav>
</template>