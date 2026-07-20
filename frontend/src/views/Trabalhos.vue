<script setup>
import { onMounted, ref } from "vue";
import api from "../api/axios";
import { useRouter } from "vue-router";
const trabalhos = ref([]);
const router = useRouter();
async function carregarTrabalhos(){
    const resposta =
        await api.get("/trabalhos");
    trabalhos.value =
        resposta.data;
}
function editar(id){
    router.push(`/editar-trabalho/${id}`);
}
async function remover(id) {
    if (!confirm("Deseja realmente excluir este trabalho?")) {
        return;
    }
    try {
        await api.delete(`/trabalhos/${id}`);
        carregarTrabalhos();
    } catch (erro) {
        alert("Não foi possível excluir o trabalho.");
        console.error(erro);
    }
}
onMounted(()=>{
    carregarTrabalhos();
});
</script>
<template>
<div>
    <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold">
            Trabalhos
        </h1>
        <RouterLink
            to="/novo-trabalho"
            class="bg-blue-600 text-white px-4 py-2 rounded"
        >
            Novo Trabalho
        </RouterLink>
    </div>
    <div
        v-for="trabalho in trabalhos"
        :key="trabalho.id"
        class="bg-white shadow rounded p-4 mb-4"
    >
        <h2 class="text-xl font-bold">
            {{ trabalho.titulo }}
        </h2>
        <p class="text-gray-600 mt-2">
            {{ trabalho.descricao }}
        </p>
        <div class="flex gap-4 mt-4">
            <button
                @click="editar(trabalho.id)"
                class="bg-yellow-500 text-white px-4 py-2 rounded"
            >
                Editar
            </button>
            <button
                @click="remover(trabalho.id)"
                class="bg-red-600 text-white px-4 py-2 rounded"
            >
                Excluir
            </button>
        </div>
    </div>
</div>
</template>