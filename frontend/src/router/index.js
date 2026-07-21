import DetalhesTrabalho from "../views/DetalhesTrabalho.vue";
import NovoTrabalho from "../views/NovoTrabalho.vue";
import Dashboard from "../views/Dashboard.vue";
import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import EditarTrabalho from "../views/EditarTrabalho.vue";
import Trabalhos from "../views/Trabalhos.vue";
import Login from "../views/login.vue";
import Cadastro from "../views/cadastro.vue";
import Arquivos from "../views/Arquivos.vue";
const routes = [
    {
        path: "/login",
        component: Login
    },
    {
        path: "/cadastro",
        component: Cadastro
    },
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "",
                redirect: "/dashboard"
            },
            {
                path: "/dashboard",
                component: Dashboard,
                meta: {
                    requiresAuth: true
                }
            },
            {   
                path: "trabalhos",
                component: Trabalhos,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "novo-trabalho",
                component: NovoTrabalho,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "editar-trabalho/:id",
                component: EditarTrabalho,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "trabalhos/:id",
                component: DetalhesTrabalho,
                meta:{
                    requiresAuth:true
                }
            },
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
});
router.beforeEach((to) => {
    const token = localStorage.getItem("token");
    if (to.meta.requiresAuth && !token) {
        return "/login";
    }
});
export default router;