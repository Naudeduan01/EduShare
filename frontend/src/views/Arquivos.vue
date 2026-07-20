<script setup>
import { ref, onMounted } from "vue";
import api from "../api/axios";

const arquivos = ref([]);

async function carregarArquivos() {
    try {
        const resposta = await api.get("/arquivos");
        arquivos.value = resposta.data;
    } catch (erro) {
        console.error(erro);
    }
}

onMounted(() => {
    carregarArquivos();
});
</script>

<template>
<div>
    <h1 class="text-3xl font-bold mb-8">
        Arquivos
    </h1>

    <div
        v-for="arquivo in arquivos"
        :key="arquivo.id"
        class="bg-white shadow rounded p-4 mb-4"
    >
        <h2 class="font-bold">
            {{ arquivo.nome_original }}
        </h2>

        <p class="text-gray-500">
            {{ arquivo.tipo }}
        </p>

        <a
            :href="`http://localhost:3000/arquivos/${arquivo.id}/download`"
            class="text-blue-600 hover:underline"
        >
            Download
        </a>
    </div>
</div>
</template>