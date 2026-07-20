<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
const router = useRouter();
const auth = useAuthStore();
const email = ref("");
const senha = ref("");
const erro = ref("");
async function entrar() {
    try {
        await auth.login(email.value, senha.value);
        router.push("/dashboard");
    } catch(error) {
        console.log("ERRO LOGIN:", error);
        alert("Usuário ou senha inválidos");
    }
}
</script>
<template>
<div class="flex justify-center items-center h-screen">
    <form 
    @submit.prevent="entrar"
    class="flex flex-col gap-4 w-96">
        <h1 class="text-3xl font-bold">
            Login
        </h1>
        <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="border p-2 rounded"
        />
        <input
        v-model="senha"
        type="password"
        placeholder="Senha"
        class="border p-2 rounded"
        />
        <button
        class="bg-blue-600 text-white p-2 rounded">
            Entrar
        </button>
        <p class="text-red-500">
            {{ erro }}
        </p>
        <div class="mt-4 text-center">
        <RouterLink
            to="/cadastro"
            class="text-blue-600 hover:underline"
        >
            Não possui conta? Crie uma agora.
        </RouterLink>
        </div>
    </form>
</div>
</template>