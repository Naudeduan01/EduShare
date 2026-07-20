<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import api from "../api/axios";
const router = useRouter();
const titulo = ref("");
const descricao = ref("");
const categoria_id = ref("");
const categorias = ref([]);
async function carregarCategorias() {
    const resposta = await api.get("/categorias");
    categorias.value = resposta.data;
}
async function salvar() {
    await api.post("/trabalhos", {
        titulo: titulo.value,
        descricao: descricao.value,
        categoria_id: categoria_id.value
    });
    router.push("/trabalhos");
}
onMounted(() => {
    carregarCategorias();
});
</script>
<template>
<div class="max-w-xl mx-auto">
    <h1 class="text-3xl font-bold mb-8">
        Novo Trabalho
    </h1>
    <div class="space-y-4">
        <input
            v-model="titulo"
            placeholder="Título"
            class="border rounded p-2 w-full"
        />
        <textarea
            v-model="descricao"
            placeholder="Descrição"
            class="border rounded p-2 w-full"
        ></textarea>
        <select
            v-model.number="categoria_id"
            class="border rounded p-2 w-full"
        >
            <option value="">
                Selecione uma categoria
            </option>
            <option
                v-for="categoria in categorias"
                :key="categoria.id"
                :value="categoria.id"
            >
                {{ categoria.nome }}
            </option>
        </select>
        <button
            @click="salvar"
            class="bg-blue-600 text-white px-4 py-2 rounded"
        >
            Salvar
        </button>
    </div>
</div>
</template>