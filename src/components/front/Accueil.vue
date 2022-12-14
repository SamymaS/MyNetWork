<template>
    <div>
        <FormAddTache />
        <h1>{{ tachesStore.titre }}</h1> 
        <!-- afficher la liste de tâches -->
        <div class="row">
            <article class="col-4" v-for="todo , index in tachesStore.taches" :key="index">
                <div class="card">
                    <header class="card-header">
                        <h2>{{ todo.nom }}</h2>
                    </header>  
                    <footer class="card-footer">
                        <button class="btn btn-danger" @click="suppr(todo.id)">suppr</button>
                    </footer>
                </div>
            </article>
        </div>
        <h2> Postes du jour </h2>
        <div class="row">
            <article class="col-4" v-for="todo , index in tachesStore.encours" :key="index">
                <div class="card">
                    <header class="card-header">
                        <h2>{{ todo.nom }}</h2>
                    </header>  
                </div>
            </article>
        </div>
       <!--  {{ JSON.stringify( tachesStore.taches ) }} -->
        <!-- <pre>
            {{ JSON.stringify(articles , null , " ") }}
        </pre> -->
        <div class="row">
            <article v-for="article , index in articles" :key="index" class="col-3">
                <h2 v-more="article.title"></h2>
                <p v-more.body="article.body"></p>
                <RouterLink :to="{name : 'single' , params : {id : article.id}}" class="btn btn-primary">lire la suite ...</RouterLink> 
            </article>
        </div>
    </div>
</template>
<script setup>
// équivalent avec API Composition 
import { ref , onMounted } from "vue"
import { RouterLink } from "vue-router"
import { useTodoStore } from "../../stores/todoStore"
import FormAddTache from "../front/FormAddTache.vue"

let articles = ref([]);
let tachesStore = useTodoStore() ;
//let articles = reactive([]);

function suppr(id){
    tachesStore.suppr(id);
}

onMounted( () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
            .then(reponse => reponse.json())
            .then(data => articles.value = data)
    tachesStore.getTaches();
} )

</script>

<!-- <script>
// api options
    import { RouterLink } from "vue-router"
    export default {
        data : () => {
            return {
                articles : []
            }
        },
        components : {
            "RouterLink" : RouterLink
        },  
        mounted : function(){
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(reponse => reponse.json())
            .then(data => this.articles = data)
        }
    }
</script> -->