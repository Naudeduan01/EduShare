import { defineStore } from "pinia";
import api from "../api/axios";
export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: localStorage.getItem("token") || null,
        usuario: null
    }),
    actions: {
        async login(email, senha) {
            const resposta = await api.post("/login", {
                email,
                senha
            });
            this.token = resposta.data.token;
            localStorage.setItem(
                "token",
                this.token
            );
        },
        logout() {
            this.token = null;
            localStorage.removeItem("token");
        }
    }
});