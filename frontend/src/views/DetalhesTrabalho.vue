<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import api from "../api/axios";
const route = useRoute();
const trabalho = ref(null);
const arquivos = ref([]);
const arquivoSelecionado = ref(null);
const nomeArquivo = ref("");
const mensagem = ref('');
async function carregar(){
    const id = route.params.id;
    const resposta = await api.get(`/trabalhos/${id}`);
    trabalho.value = resposta.data;
    const arquivosResposta =
        await api.get(`/trabalhos/${id}/arquivos`);
    arquivos.value = arquivosResposta.data;
}
function selecionarArquivo(event){
    arquivoSelecionado.value =
        event.target.files[0];

    nomeArquivo.value =
        arquivoSelecionado.value?.name || "";
}
async function enviarArquivo(){
    if(!arquivoSelecionado.value){
        alert("Selecione um arquivo");
        return;
    }
    const formData = new FormData();
    formData.append(
        "arquivo",
        arquivoSelecionado.value
    );
    formData.append(
        "trabalho_id",
        route.params.id
    );
    await api.post(
        `/trabalhos/${route.params.id}/arquivos`,
        formData,
        {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }
    );
    arquivoSelecionado.value = null;
    nomeArquivo.value = "";
    mensagem.value = "Arquivo enviado com sucesso!";
    await carregar();
}
function baixarArquivo(id){
    function baixarArquivo(id){
    window.open(
        `${api.defaults.baseURL}/arquivos/${id}/download`,
        "_blank"
    );
}
}
async function excluirArquivo(id){

    if(!confirm("Deseja realmente excluir este arquivo?")){
        return;
    }

    try {
        await api.delete(`/arquivos/${id}`);

        mensagem.value = "Arquivo excluído com sucesso!";

        await carregar();

    } catch(error){
        console.error(error);
        alert("Não foi possível excluir o arquivo.");
    }
}
onMounted(()=>{
    carregar();
});
</script>
<template>
<div v-if="trabalho">
    <h1 class="text-3xl font-bold mb-4">
        {{ trabalho.titulo }}
    </h1>
    <p class="mb-6">
        {{ trabalho.descricao }}
    </p>
    <p class="text-gray-500 mb-4">
    Qualquer usuário autenticado pode colaborar anexando arquivos neste trabalho.
</p>
    <h2 class="text-xl font-bold mb-3">
        Arquivos
    </h2>
    <div class="bg-grey shadow rounded p-4 mb-6">
    <label
    for="arquivo"
    class="inline-block cursor-pointer bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 mb-3"
>
    📎 Escolher arquivo
    </label>

<input
    id="arquivo"
    type="file"
    @change="selecionarArquivo"
    class="hidden"
/>

<p
    v-if="nomeArquivo"
    class="text-gray-600 mb-3"
>
    Arquivo selecionado: {{ nomeArquivo }}
</p>
    
    <p class="text-gray-500 mb-4">
    Arquivos permitidos: .txt .png .jpg .doc/docx .xls/xlsx .ppt/pptx .mp4.
</p>
    <button
        @click="enviarArquivo"
        class="bg-blue-600 text-white px-4 py-2 rounded"
    >
        Enviar arquivo
    </button>
    <p
    v-if="mensagem"
    class="text-green-600 mt-3"
>
    {{ mensagem }}
    </p>
</div>
<div
    v-for="arquivo in arquivos"
    :key="arquivo.id"
    class="bg-white shadow rounded p-3 mb-2 flex justify-between items-center"
>
    <span>
        📄 {{ arquivo.nome_original }}
    </span>

    <div class="flex gap-2">

        <button
            @click="baixarArquivo(arquivo.id)"
            class="bg-green-600 text-white px-3 py-1 rounded"
        >
            Baixar
        </button>

        <button
            @click="excluirArquivo(arquivo.id)"
            class="bg-red-600 text-white px-3 py-1 rounded"
        >
            Excluir
        </button>

    </div>

</div>
</div>
</template>