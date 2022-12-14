<template>
    <div class="bg-warning">
        <nav class="navbar navbar-expand navbar-light container">
            <RouterLink :to="'/'" class="navbar-brand">MyNetWork</RouterLink>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink :to="'/'" class="nav-link">Accueil</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink :to="{name:'contact'}" class="nav-link">Contact</RouterLink>
                </li>
            </ul>
            <ul class="ms-auto navbar-nav">
                <li class="nav-item">
                    <RouterLink :to="{name:'login'}" class="nav-link">Login</RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
import { RouterLink } from "vue-router"
    export default {
        name : "menu",
        components : {
            "RouterLink" : RouterLink
        }
    }
</script>