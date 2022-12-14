import { createRouter , createWebHistory } from "vue-router"
import Accueil from "./components/front/Accueil.vue"
import Login from "./components/front/Login.vue"

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : "/" , name:"accueil" , component : Accueil},
        {path : "/login" , name : "login" , component : Login} 
        // {path : "/article/:id" , name:"single" , component : Single}, // route avec paramètre variable id 
        // si aucune route ne match => exécuter un composant NotFound
        // il faut que cette route NotFound soit mise en dernier 
    ]
})


export default router ; 