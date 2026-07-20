<script setup>
import { ref, onMounted } from "vue";
import api from "../api/axios";
const totalTrabalhos = ref(0);
const totalCategorias = ref(0);
const totalArquivos = ref(0);
async function carregarDashboard() {
    try {
        const trabalhos = await api.get("/trabalhos");
        totalTrabalhos.value = trabalhos.data.length;
        const categorias = await api.get("/categorias");
        totalCategorias.value = categorias.data.length;
        const arquivos = await api.get("/arquivos");
        totalArquivos.value = arquivos.data.length;
    } catch (erro) {
        console.error("Erro ao carregar dashboard:", erro);
    }
}
onMounted(() => {
    carregarDashboard();
});
</script>
<template>
<div>
    <h1 class="text-3xl font-bold mb-8">
        Dashboard
    </h1>

    <div class="grid grid-cols-3 gap-6">

        <RouterLink
            to="/trabalhos"
            class="bg-white rounded shadow p-6 hover:shadow-lg transition text-center"
        >
            <h2 class="text-gray-500">
                Trabalhos
            </h2>

            <p class="text-5xl font-bold mt-2">
                {{ totalTrabalhos }}
            </p>
        </RouterLink>


        <!--<RouterLink
            to="/categorias"
            class="bg-white rounded shadow p-6 hover:shadow-lg transition text-center"
        >
            <h2 class="text-gray-500">
                Categorias
            </h2>

            <p class="text-5xl font-bold mt-2">
                {{ totalCategorias }}
            </p>
        </RouterLink>


        <RouterLink
            to="/trabalhos"
            class="bg-white rounded shadow p-6 hover:shadow-lg transition text-center"
        >
            <h2 class="text-gray-500">
                Arquivos
            </h2>

            <p class="text-5xl font-bold mt-2">
                {{ totalArquivos }}
            </p>
        </RouterLink>
    -->
    </div>
</div>
</template>