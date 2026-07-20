<script setup>

import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "../api/axios";

const route = useRoute();
const router = useRouter();

const titulo = ref("");
const descricao = ref("");
const categoria_id = ref("");

const categorias = ref([]);

async function carregarCategorias() {

    const resposta = await api.get("/categorias");

    categorias.value = resposta.data;

}

async function carregarTrabalho() {

    const resposta = await api.get(`/trabalhos/${route.params.id}`);

    titulo.value = resposta.data.titulo;
    descricao.value = resposta.data.descricao;
    categoria_id.value = resposta.data.categoria_id;

}

async function salvar() {

    console.log("Entrou em salvar");

    await api.put(`/trabalhos/${route.params.id}`, {

        titulo: titulo.value,
        descricao: descricao.value,
        categoria_id: categoria_id.value

    });

    router.push("/trabalhos");

}

onMounted(async () => {

    await carregarCategorias();

    await carregarTrabalho();

});

</script>

<template>

<div class="max-w-xl mx-auto">

    <h1 class="text-3xl font-bold mb-8">

        Editar Trabalho

    </h1>

    <div class="space-y-4">

        <input
            v-model="titulo"
            class="border rounded p-2 w-full"
        />

        <textarea
            v-model="descricao"
            class="border rounded p-2 w-full"
        ></textarea>

        <select
            v-model="categoria_id"
            class="border rounded p-2 w-full"
        >

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
            class="bg-green-600 text-white px-4 py-2 rounded"
        >

            Salvar Alterações

        </button>

    </div>

</div>

</template>