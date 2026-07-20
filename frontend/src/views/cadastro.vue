<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import api from "../api/axios";

const router = useRouter();

const nome = ref("");
const email = ref("");
const senha = ref("");
const idade = ref("");

async function cadastrar() {
    try {
        await api.post("/usuarios", {
            nome: nome.value,
            email: email.value,
            senha: senha.value,
            idade: Number(idade.value)
        });

        alert("Usuário criado com sucesso!");

        router.push("/login");

    } catch (erro) {
        console.error(erro);
        alert("Erro ao criar usuário.");
    }
}
</script>

<template>
<div class="max-w-md mx-auto mt-20 bg-white shadow rounded p-6">

    <h1 class="text-3xl font-bold mb-6 text-center">
        Criar Conta
    </h1>

    <div class="space-y-4">

        <input
            v-model="nome"
            placeholder="Nome"
            class="border rounded p-2 w-full"
        />

        <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="border rounded p-2 w-full"
        />

        <input
            v-model="senha"
            type="password"
            placeholder="Senha"
            class="border rounded p-2 w-full"
        />

        <input
            v-model="idade"
            type="number"
            placeholder="Idade"
            class="border rounded p-2 w-full"
        />

        <button
            @click="cadastrar"
            class="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
            Criar Conta
        </button>

    </div>

</div>
</template>