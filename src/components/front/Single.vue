<template>
    <div>
        <h1>{{ article.title }}</h1>
        <p>{{ article.body }}</p>
        <RouterLink :to="{ name:'single' , params : { id : id } }" class="mb-2 d-inline-block">article précédent </RouterLink>
        <nav>
            <button class="btn btn-danger me-2" @click="prev">page précédente</button>
            <button class="btn btn-info" @click="next">page suivante</button>
        </nav>
    </div>
</template>

<!-- <script setup>
// composition
    import { useRoute } from "vue-router"
    import { ref , onMounted} from "vue"
    const article = ref({});

    onMounted(() => {
        const route = useRoute();
        const id = route.params.id ;
        fetch("https://jsonplaceholder.typicode.com/posts/"+id)
            .then(reponse => reponse.json())
            .then(data => article.value = data)
    });
</script> -->
<script>
// 
export default {
    methods : {
        prev : function(){
            this.$router.go(-1)
        },
        next : function(){
            this.$router.go(1)
        }
    },
    data : () => {
        return {
            article : {},
            id : 0
        }
    },
    mounted : function(){
       
       this.id = parseInt(this.$route.params.id ) - 1 
       fetch("https://jsonplaceholder.typicode.com/posts/"+this.id)
            .then(reponse => reponse.json())
            .then(data => this.article = data)
    },
    updated : function(){
        this.id = parseInt(this.$route.params.id ) - 1 
        fetch("https://jsonplaceholder.typicode.com/posts/"+this.id)
            .then(reponse => reponse.json())
            .then(data => this.article = data)
    }
}

</script>